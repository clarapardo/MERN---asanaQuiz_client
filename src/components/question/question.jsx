import './question.css'
import AnswerChip from '../answerChip/answerChip'
import setService from '../../services/set.service'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import LoadingQuestion from '../loadingQuestion/loadingQuestion'


const Question = ({ data, points }) => {

    const { nameEnglish, nameSanskrit, _id: id, imageUrl } = data
    const [answers, setAnswers] = useState([])

    useEffect(() => {
        document.body.style.pointerEvents = 'auto';

        if (!!id) {
            setService
                .getRandomNames(id)
                .then(({ data: names }) => {

                    names.push(nameSanskrit)
                    const unorderedNames = names.sort((a, b) => 0.5 - Math.random())
                    setAnswers(unorderedNames)
                })
                .catch(err => console.error(err))
        }
    }, [id])


    return (

        <div className="question">
            {nameEnglish === undefined
                ?
                <LoadingQuestion></LoadingQuestion>
                :
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} justifyContent="center" container direction="column" alignItems="center">
                        <img src={imageUrl} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h2>{nameEnglish === '-'
                            ?
                            'name this asana'
                            :
                            `${nameEnglish} - what's the name in sanskrit?`
                        }</h2>
                        <Grid container spacing={2}>
                            {answers.map(elm => <Grid item xs={12} sm={6} md={12} key={elm}><AnswerChip key={elm} name={elm} correctAnswer={nameSanskrit} points={points} id={id} ></AnswerChip></Grid>)}
                        </Grid>
                    </Grid>
                </Grid>
            }

        </div>
    )
}

export default Question