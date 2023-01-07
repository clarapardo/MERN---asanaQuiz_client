import './pointsCounter.css'
import PointChip from '../pointChip/pointChip'


const PointsCounter = ({ points }) => {

    const renderPoints = () => {
        let chips = [];
        for (let i = 1; i <= 12; i++) {
            chips.push(<PointChip key={i} id={i} point={points[i - 1]}></PointChip>);
        }
        return chips;
    }

    return (
        <div className="questionCounter">{renderPoints()}</div>
    )
}

export default PointsCounter