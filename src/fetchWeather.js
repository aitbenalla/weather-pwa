import axios from "axios";
const URL = 'https://api.openweathermap.org/data/2.5/weather'
const APP_KEY = '137cd9441c88560357fe716f6b54cff4'

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: APP_KEY
        }
    })

    return data
}