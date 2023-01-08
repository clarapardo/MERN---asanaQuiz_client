import './answerChip.css'
import { addToCookie, deleteFromCookie, getCookie, getCookieValues } from '../../utils/cookies'

const AnswerChip = ({ name, correctAnswer, points, id }) => {

    // console.log(id)

    const validateAnswer = ({ target }) => {

        document.body.style.pointerEvents = 'none';
        setTimeout(() => {
            if (target.classList.contains(true)) {
                target.classList.add('correctAnswer')
                if (!!getCookie()) {
                    if (getCookieValues().includes(id)) {
                        deleteFromCookie(id)
                    }
                }
                setTimeout(() => points(oldState => oldState.concat(true)), 2000)
            } else {
                target.classList.add('wrongAnswer')
                document.querySelector('.answerChip.true').classList.add('correctAnswer')
                setTimeout(() => points(oldState => oldState.concat(false)), 2000)
                addToCookie(id)
            }
        }, 1500)
    }

    return <div className={name === correctAnswer ? 'answerChip true' : 'answerChip'} onClick={(e) => validateAnswer(e)}>{name}</div>
}

export default AnswerChip