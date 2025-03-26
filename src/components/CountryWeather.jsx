import React, { useState, useEffect } from "react";
import countryService from "../services/countriesService";
const CountryWeather = ({ capital, flagSvg }) => {

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
    useEffect(() => {
        if (weather) {
            const currWeather = weather.weather[0].main
            console.log(currWeather)
            let backgroundChange;
            if (currWeather === 'Clear') {
                backgroundChange = {
                    background: "blue"
                    // backgroundImage: "url(image/Sunny_background.png)"
                }
                console.log(style)
                // do something
            } else if (currWeather === 'Mist') {
                backgroundChange = {
                    background: "black"
                    // backgroundImage: "url(image/Mist_background.png)"
                }        // style = {background:blue}
            } else if (currWeather === 'Clouds') {
                console.log('ruan?')
                backgroundChange = {
                    background: "green"
                    // backgroundImage: "url(image/Cloud_background.png)"
                }
            }
            document.body.style.backgroundImage = backgroundChange;
        }
    }, [weather]);


    if (loading) return <p>Loading ...</p>
    if (!weather) return <p>No Weather data available</p>

    const flagStyle = {
        width: '80%',
        height: 'auto'
    }
    return (
        <>
            <div class='weather_inf'>
                {/* <CountryDetail></CountryDetail> */}
                <h2>Weather in {capital}</h2>
                <img src={flagSvg} style={flagStyle}></img>
                <p>Temperature {weather.main.temp}°F</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} />
                <p>wind {weather.wind.speed} m/s</p>
            </div>
        </>)
}

export default CountryWeather