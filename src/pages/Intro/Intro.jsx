import './Intro.css'
import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close';



const Intro = () => {

    const search = useLocation().search
    const level = new URLSearchParams(search).get('')
    let copy, explanation;
    if (level === '1') {
        copy = 'Yogui newbie'
        explanation = 'A twelve set of the most common asanas will be displayed - the asanas that can be found in surya namaskar A, surya namaskar B, and some other basic sequencies.'
    } else if (level === '2') {
        copy = 'Intermedio'
        explanation = 'You will play a set of twelve asanas of medium level - based on how commonly used are, and how difficult the sanskrit name is.'
    } else {
        copy = 'Next Dalai Lama'
        explanation = 'A set of twelve asanas will be displayed. This asanas are more unique, more rarely used in classes, or have quite a bit more difficult name - but not necessarily means that they are advanced postures.'
    }

    return (
        <div className="Intro">

            <Link to='/'>
                <div className='close_cta'><CloseIcon></CloseIcon></div>
            </Link>

            <h6>level {level}</h6>
            <h1>{copy}</h1>

            <p class="someText">{explanation}</p>

            <Link to={`/playing/${level}`}>
                <div className="start_cta"><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </Link>

            <p className='disclaimer'>Please, note that your yoga level is not measured by the amount of asanas you can name, or even do ;)</p>
        </div >
    )
}

export default Intro