import axios from 'axios'

export const getData = async () => {
    try {
        return axios.get(`https://api.airtable.com/v0/${process.env.VUE_APP_BASE}/Table%201?api_key=${process.env.VUE_APP_AIRTABLE_KEY}`)
    }
    catch (err) {
        return console.log(err)
    }
}
