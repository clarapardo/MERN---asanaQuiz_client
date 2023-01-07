import './Game.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import setService from '../../services/set.service'
import Question from '../../components/question/question'
import PointsCounter from '../../components/pointsCounter/pointsCounter'


const Game = () => {

    const { level } = useParams()
    const [set, setSet] = useState([])
    const [question, setQuestion] = useState({})
    const [points, setPoints] = useState([])



    useEffect(() => {
        getSet()
    }, [])

    //* Cada vez que se conteste a una preguta:
    useEffect(() => {
        if (points.length !== 0) {

            setQuestion(set[points.length]);
            document.querySelector('.answerChip.wrongAnswer')?.classList.remove('wrongAnswer')
            document.querySelector('.answerChip.correctAnswer')?.classList.remove('correctAnswer')

        } else if (points.length === 12) {
            console.log('HAS ACABADO EL JUEGO!')
        }
    }, [points])

    const getSet = () => {

        setService
            .generateSet(level)
            .then(({ data }) => {
                setSet(data)
                setQuestion(data[0])
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='Game'>

            <Link to='/'>
                <button>X</button>
            </Link>

            <PointsCounter points={points}></PointsCounter>
            <h2>{points.length < 0 ? 0 : [...points].filter(elm => elm === true).length} / 12</h2>
            <Question data={question} points={setPoints}></Question>

        </div>
    )
}

export default Game