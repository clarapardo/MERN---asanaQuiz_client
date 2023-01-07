import axios from 'axios'

class SetService {

    constructor() {
        this.app = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}`
        })

    }

    generateSet = (level) => {
        return this.app.get(`/randomSet/${level}`)
    }

    getRandomNames = (id) => {
        return this.app.get(`/randomNames/${id}`)
    }

}

const setService = new SetService()

export default setService