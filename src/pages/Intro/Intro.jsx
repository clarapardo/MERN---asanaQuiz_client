import './Intro.css'
import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import CloseIcon from '@mui/icons-material/Close';



const Intro = () => {

    const search = useLocation().search
    const level = new URLSearchParams(search).get('')
    let copy;
    if (level === '1') {
        copy = 'Yogui newbie'
    } else if (level === '2') {
        copy = 'Intermedio'
    } else {
        copy = 'Next Dalai Lama'
    }

    //? haría falta un btn de volver
    return (
        <div class="Intro">

            <Link to='/'>
                <div className='close_cta'><CloseIcon></CloseIcon></div>
            </Link>

            <h6>level {level}</h6>
            <h1>{copy}</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper velit. Etiam ut rutrum nisl. Suspendisse nec porta velit. Suspendisse felis nisl, dapibus at odio nec, tincidunt vehicula ante</p>

            <Link to={`/playing/${level}`}>
                <div class="start_cta"><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </Link>

            <p className='disclaimer'>Please, note that your yoga level is not measured by the amount of asanas you can name, or even do ;)</p>
        </div >
    )
}

export default Intro