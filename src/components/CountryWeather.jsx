import React, { useState, useEffect } from "react";
import countryService from "../services/countriesService";

const CountryWeather = ({capital}) => {

    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true)
            if (capital) {
                try {
                    const weatherData = await countryService.getWeatherByCityName(capital)
                    setWeather(weatherData)
                    console.log('API called')
                } catch (error) {
                    console.error("Error fetch weather data: ", error)
                }
            }
            setLoading(false)
        }
        fetchWeather()
    }, [capital])

    if (loading) return <p>Loading ...</p>
    if (!weather) return <p>No Weather data available</p>

    return(
    <>
        <h2>Weather in {capital}</h2>
        <p>Temperature {weather.main.temp}°F</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}/>
        <p>wind {weather.wind.speed} m/s</p>
    </>)
}

export default CountryWeather