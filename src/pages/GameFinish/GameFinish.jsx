import './GameFinish.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import Pie from '../../components/porcentagePie/porcentagePie';
import { useEffect } from 'react';

const GameFinish = ({ points }) => {

    let pointsValue = [...points].filter(elm => elm === true).length
    let porcentagePoints = Math.ceil(pointsValue * 100 / points.length)
    let catchPhrase;
    if (pointsValue < 6) catchPhrase = 'Oh oh... bad day uh?'
    if (pointsValue >= points.length / 2 && pointsValue < points.length * 3 / 4) catchPhrase = 'Nice try! But it seems that there are still some loose ends'
    if (pointsValue >= points.length * 3 / 4 && pointsValue < points.length) catchPhrase = 'Awesome! Almost there ;)'
    if (pointsValue === points.length) catchPhrase = 'Brilliant! Not a single miskate'
    document.body.style.pointerEvents = 'auto'

    return (
        <div className="GameFinish">
            <div className="hero">
                <div className='icon'>🧿</div>
                <div>
                    <h4>{catchPhrase}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi sagittis.</p>
                </div>
            </div>

            <div className="numbers">
                <div className='roundPorcentage'>
                    <Pie percentage={porcentagePoints} colour="#382b58" className='pie'></Pie>
                    <div className="core">{porcentagePoints}%</div>
                </div>
                <div>
                    <p>Punctuation</p>
                    <p><span>{pointsValue}</span>/{points.length}</p>
                </div>
            </div>

            <Link to='/'>
                <div className='return_cta'>return to home</div>
            </Link>
        </div>
    )
}

export default GameFinish