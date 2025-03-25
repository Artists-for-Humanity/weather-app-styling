import axios from 'axios'
// get weather api key from openweathermap.org then paste below
const weatherApiKey = 'a0b523838a93fee1030895a9837dae9c'
const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`

const getWeatherByCityName = async (cityName) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${weatherApiKey}&units=imperial`)
    console.log('response:', response.data)
    return response.data
}

const getAllCountries = () => axios.get(`${baseUrl}`)

export default { getAllCountries, getWeatherByCityName }