import './pointChip.css'

const PointChip = ({ id, point }) => {

    let status = ''
    if (point === true) status = 'correct'
    else if (point === false) status = 'incorrect'

    return <div id={id} className={`pointChip ${status}`}></div>
}

export default PointChip