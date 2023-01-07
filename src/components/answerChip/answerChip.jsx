import './answerChip.css'

const AnswerChip = ({ name, correctAnswer, points }) => {

    const validateAnswer = ({ target }) => {

        document.body.style.pointerEvents = 'none';

        if (target.classList.contains(true)) {
            target.classList.add('correctAnswer')
            setTimeout(() => points(oldState => oldState.concat(true)), 2000)
        } else {
            target.classList.add('wrongAnswer')
            setTimeout(() => points(oldState => oldState.concat(false)), 2000)
        }
    }

    return (
        <div className={name === correctAnswer ? 'answerChip true' : 'answerChip'} onClick={(e) => validateAnswer(e)}>{name}</div>
    )
}

export default AnswerChip