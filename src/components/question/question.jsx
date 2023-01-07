import './question.css'
import AnswerChip from '../answerChip/answerChip'
import setService from '../../services/set.service'
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'


const Question = ({ data, points }) => {

    const { nameEnglish, nameSanskrit, _id: id, imageUrl } = data

    const [answers, setAnswers] = useState([])

    useEffect(() => {

        document.body.style.pointerEvents = 'auto';

        setService
            .getRandomNames(id)
            .then(({ data: names }) => {

                names.push(nameEnglish)
                const unorderedNames = names.sort((a, b) => 0.5 - Math.random())
                setAnswers(unorderedNames)
            })
            .catch(err => console.error(err))
    }, [id])


    return (

        <div className="question">

            <Grid container spacing={2}>
                <Grid item xs={12} sm={4} justifyContent="center" container direction="column" alignItems="center" s>
                    <img src="https://xuanlanyoga.com/wp-content/uploads/2022/05/posturas-de-equilibrio-yoga.jpg" />
                    <p>{nameEnglish}</p>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <h2>Name this asana:</h2>
                    <Grid container spacing={2}>
                        {answers.map(elm => <Grid item xs={12} sm={6}><AnswerChip key={elm} name={elm} correctAnswer={nameEnglish} points={points} id={id}></AnswerChip></Grid>)}
                    </Grid>
                </Grid>

            </Grid>


        </div>
    )
}

export default Question