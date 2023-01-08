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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut semper velit. Etiam ut rutrum nisl. Suspendisse nec porta velit. Suspendisse felis nisl, dapibus at odio nec, tincidunt vehicula ante</p>

            <Link to={'/replaying'}>
                <div class="start_cta"><ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </Link>

            <p className='disclaimer'>Please, note that your yoga level is not measured by the amount of asanas you can name, or even do ;)</p>

        </div>
    )
}

export default IntroRetry