import './question.css'
import AnswerChip from '../answerChip/answerChip'
import setService from '../../services/set.service'
import { useEffect, useState } from 'react'


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
            <img src="https://xuanlanyoga.com/wp-content/uploads/2022/05/posturas-de-equilibrio-yoga.jpg" />
            <h2>Name this asana:</h2>
            {/* <h2>{data.nameEnglish}</h2> */}

            {answers.map(elm => <AnswerChip key={elm} name={elm} correctAnswer={nameEnglish} points={points}></AnswerChip>)}


        </div>
    )
}

export default Question