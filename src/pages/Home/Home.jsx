import './Home.css'
import { Grid } from '@mui/material'; // Grid version 2
import { Link, Navigate, useNavigate } from 'react-router-dom'


const HomePage = () => {

    return (
        <section className='Home'>
            <h1>Asana quiz</h1>
            <h3>Let's play</h3>

            <Grid container spacing={2} className='level_cards_container'>
                <Grid item xs={4}>
                    <Link to='/start?=1'>
                        <article className='level_card'>
                            <p>*</p>
                            <p>Level 1</p>
                            <h6>Yogui newbie</h6>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to='/start?=2'>

                        <article className='level_card'>
                            <p>*</p>
                            <p>Level 2</p>
                            <h6>Intermedio</h6>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={4}>
                    <Link to='/start?=3'>
                        <article className='level_card'>
                            <p>*</p>
                            <p>Level 3</p>
                            <h6>Next Dalai Lama</h6>
                        </article>
                    </Link>
                </Grid>
            </Grid>

        </section>
    )
}

export default HomePage