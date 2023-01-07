import './Home.css'
import { Grid } from '@mui/material'; // Grid version 2
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import LockIcon from '@mui/icons-material/Lock'
import { addToCookie, deleteFromCookie, getCookie } from '../../utils/cookies'


const HomePage = () => {

    console.log('------', getCookie())
    return (
        <section className='Home'>
            <h1>Asana quiz</h1>
            <h3>Learn the sanskrit name of some yoga postures and play at the same time.</h3>

            <Grid container spacing={2} className='level_cards_container'>
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/start?=1'>
                        <article className='level_card c1'>
                            <CheckIcon className='icon'></CheckIcon>
                            <p>level 1</p>
                            <h6>Yogui newbie</h6>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/start?=2'>

                        <article className='level_card c2'>
                            <PlayArrowIcon className='icon'></PlayArrowIcon>
                            <p>level 2</p>
                            <h6>Intermedio</h6>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={4} center>
                    <Link to='/start?=3'>
                        <article className='level_card c3'>
                            <LockIcon className='icon'></LockIcon>
                            <p>level 3</p>
                            <h6>Next Dalai Lama</h6>
                        </article>
                    </Link>
                </Grid>
            </Grid>

            {getCookie() !== ""
                ?
                <Link to="/replaying">
                    <div>Retry the incorrect ones</div>
                </Link>
                :
                <div>No wrong ones yet</div>
            }

        </section>
    )
}

export default HomePage