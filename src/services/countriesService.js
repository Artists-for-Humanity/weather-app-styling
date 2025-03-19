import axios from 'axios'
// get weather api key from openweathermap.org then paste below
const weatherApiKey = 'b83db1025eec346d656f2467f7397b2e'
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`

const getWeatherByCityName = async (cityName) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=imperial`)
    console.log('response:', response.data)
    return response.data
}

const getAllCountries = () => axios.get(`${baseUrl}`)

export default { getAllCountries, getWeatherByCityName }