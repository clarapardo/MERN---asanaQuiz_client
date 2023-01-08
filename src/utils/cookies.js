const addToCookie = (value) => {

    var date = new Date()
    date.setTime(date.getTime() + (31 * 24 * 60 * 60 * 1000))
    let expires = "; expires=" + date.toUTCString()

    if (!!getCookie()) {
        let cookieValue = getCookieValues()
        cookieValue.push(value)
        value = cookieValue
    }

    document.cookie = "asanaQuiz_wrong=" + (value || "") + expires + "; path=/"
}

const deleteFromCookie = (value) => {
    if (!!getCookie()) {
        var date = new Date()
        date.setTime(date.getTime() + (31 * 24 * 60 * 60 * 1000))
        let expires = "; expires=" + date.toUTCString()

        let cookieValue = getCookieValues()
        let index = cookieValue.indexOf(value)
        cookieValue.splice(index, 1)

        document.cookie = "asanaQuiz_wrong=" + (cookieValue || "") + expires + "; path=/"
    }
}

const getCookie = () => {
    let name = "asanaQuiz_wrong="
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return
}

const deleteCookie = () => {

}

const getCookieValues = () => {
    if (!!getCookie()) {
        let cookieValue = getCookie()
        return cookieValue.split(',')
    }
    return
}



module.exports = { addToCookie, deleteFromCookie, getCookie, getCookieValues }