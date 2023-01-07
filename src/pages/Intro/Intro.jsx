import './Intro.css'
import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Button } from '@mui/material'



const IntroPage = () => {

    const search = useLocation().search
    const level = new URLSearchParams(search).get('')

    //? haría falta un btn de volver
    return (
        <div class="IntroPage">

            <Link to='/'>
                <button>X</button>
            </Link>

            <p>level {level}</p>
            <h1>hello</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper velit. Etiam ut rutrum nisl. Suspendisse nec porta velit. Suspendisse felis nisl, dapibus at odio nec, tincidunt vehicula ante</p>

            <Link to={`/playing/${level}`}>
                <Button variant="contained" color="success">start</Button>
            </Link>
        </div >
    )
}

export default IntroPage