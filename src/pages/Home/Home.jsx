import './Home.css'
import { Grid } from '@mui/material' // Grid version 2
import { Link } from 'react-router-dom'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import { getCookie, getCookieValues } from '../../utils/cookies'


const HomePage = () => {

    return (
        <section className='Home'>
            <h1>Asana quiz</h1>
            <h3>Learn the sanskrit name of some yoga postures and play at the same time.</h3>

            <Grid container spacing={2} className='level_cards_container'>
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/start?=1'>
                        <article className='level_card c1'>
                            <GraphicEqIcon className='icon'></GraphicEqIcon>
                            <p>level 1</p>
                            <h6>Yogui newbie</h6>
                            <div className="img"></div>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Link to='/start?=2'>

                        <article className='level_card c2'>
                            <AutoAwesomeIcon className='icon'></AutoAwesomeIcon>
                            <p>level 2</p>
                            <h6>Somebody said yoga retreat?</h6>
                            <div className="img"></div>
                        </article>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Link to='/start?=3'>
                        <article className='level_card c3'>
                            <AllInclusiveIcon className='icon'></AllInclusiveIcon>
                            <p>level 3</p>
                            <h6>Close to ilumination</h6>
                            {/* <h6>Next Dalai Lama</h6> */}
                            <div className="img"></div>
                        </article>
                    </Link>
                </Grid>
            </Grid>

            {!!getCookie()
                ?
                <Link to="/restart">
                    <div className='retryCta'>Retry failed ones - {getCookieValues().length}</div>
                </Link>
                :
                null
            }

        </section>
    )
}

export default HomePage