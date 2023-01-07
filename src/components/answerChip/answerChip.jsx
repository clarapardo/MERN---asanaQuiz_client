import './answerChip.css'

const AnswerChip = ({ name, correctAnswer, points, id }) => {

    console.log(id)

    const validateAnswer = ({ target }) => {

        document.body.style.pointerEvents = 'none';
        setTimeout(() => {
            if (target.classList.contains(true)) {
                target.classList.add('correctAnswer')
                setTimeout(() => points(oldState => oldState.concat(true)), 2000)
            } else {
                target.classList.add('wrongAnswer')
                document.querySelector('.answerChip.true').classList.add('correctAnswer')
                setTimeout(() => points(oldState => oldState.concat(false)), 2000)
            }
        }, 1500)
    }

    return <div className={name === correctAnswer ? 'answerChip true' : 'answerChip'} onClick={(e) => validateAnswer(e)}>{name}</div>
}

export default AnswerChip