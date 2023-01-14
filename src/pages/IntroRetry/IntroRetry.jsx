import './IntroRetry.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'



const IntroRetry = () => {

    return (
        <div className='IntroRetry'>
            <Link to='/'>
                <div className='close_cta'><CloseIcon></CloseIcon></div>
            </Link>

            <h1>Retry the failed ones</h1>
            <p className="someText">Here you will find the collection of all the failed asanas played. You have the chance of review them and try again. There is no limit - the number you of asanas that you failed is the number of asanas you'll play now.</p>

            <Link to={'/replaying'}>
                <div className="start_cta"><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </Link>

            <p className='disclaimer'>Please, note that your yoga level is not measured by the amount of asanas you can name, or even do ;)</p>
        </div>
    )
}

export default IntroRetry