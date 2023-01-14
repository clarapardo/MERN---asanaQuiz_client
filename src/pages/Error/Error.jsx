import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {

    return (
        <div className='Error'>
            <h1>Oops!</h1>
            <h4>404 - Page not found</h4>

            <p>Breathe in, and on the out breath, go back and try again</p>
            <Link to='/'>
                <div>Go back home</div>
            </Link>
        </div>
    )
}

export default Error