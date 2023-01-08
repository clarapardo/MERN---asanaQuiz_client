import './GameRetry.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import setService from '../../services/set.service'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { getCookieValues } from '../../utils/cookies'
import Question from '../../components/question/question'
import PointsCounter from '../../components/pointsCounter/pointsCounter'




const GameRetry = () => {

    const [set, setSet] = useState([])
    const [question, setQuestion] = useState({})
    const [points, setPoints] = useState([])
    const [open, setOpen] = useState(false)


    useEffect(() => {

        let allQuestionsId = getCookieValues()
        let allSet = []

        allQuestionsId?.map(elmId => {
            setService
                .getCompleteAsana(elmId)
                .then(({ data }) => {
                    allSet.push(data)
                    setQuestion(data)
                })
                .catch(err => console.log(err))
        })

        setSet(allSet)
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



    return (
        <div className='Game'>
            <Dialog open={open} className='close_popup'>
                <DialogTitle id="alert-dialog-title">Are you sure?</DialogTitle>
                <DialogContentText>Do you want to exit?</DialogContentText>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>no</Button>
                    <Link to='/'>
                        <Button>yes</Button>
                    </Link>
                </DialogActions>
            </Dialog>


            <div className='close_cta' onClick={() => setOpen(true)}><CloseIcon></CloseIcon></div>
            <div className='pointsBubble'>
                <div>{points.filter((elm) => (elm === true)).length}</div>
            </div>
            <Question data={question} points={setPoints}></Question>

        </div>
    )
}

export default GameRetry