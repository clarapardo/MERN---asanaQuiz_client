import './Game.css'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import setService from '../../services/set.service'
import Question from '../../components/question/question'
import PointsCounter from '../../components/pointsCounter/pointsCounter'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import GameFinish from '../GameFinish/GameFinish'



const Game = () => {

    const { level } = useParams()
    const [set, setSet] = useState([])
    const [question, setQuestion] = useState({})
    const [points, setPoints] = useState([])
    const [open, setOpen] = useState(false)


    useEffect(() => {
        getSet()
    }, [level])

    //* Cada vez que se conteste a una preguta:
    useEffect(() => {
        if (points.length !== 0 && points.length < 12) {

            setQuestion(set[points.length]);
            document.querySelector('.answerChip.wrongAnswer')?.classList.remove('wrongAnswer')
            document.querySelector('.answerChip.correctAnswer')?.classList.remove('correctAnswer')

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
            {points.length < 12
                ?
                <>
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

                    <div className="pointsContainer">
                        <PointsCounter points={points}></PointsCounter>
                        <h2><span>{points.length < 0 ? 0 : [...points].filter(elm => elm === true).length}</span>/12</h2>
                    </div>
                    <Question data={question} points={setPoints}></Question>
                </>
                :
                <GameFinish points={points}></GameFinish>
            }
        </div>
    )
}

export default Game