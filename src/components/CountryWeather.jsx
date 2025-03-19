import React, { useState, useEffect } from "react";
import countryService from "../services/countriesService";

const CountryWeather = ({ capital }) => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            if (capital) {
                try {
                    const weatherData = await countryService.getWeatherByCityName(capital);
                    setWeather(weatherData);
                    console.log("API called");
                } catch (error) {
                    console.error("Error fetching weather data: ", error);
                }
            }
            setLoading(false);
        };
        fetchWeather();
    }, [capital]);

    if (loading) return <p style={styles.loadingText}>Loading ...</p>;
    if (!weather) return <p style={styles.loadingText}>No Weather data available</p>;

    return (
        <div style={styles.weatherCard}>
            <h2 style={styles.title}>Weather in {capital}</h2>
            <p style={styles.info}>Temperature: {weather.main.temp}°F</p>
            <img 
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} 
                alt="Weather Icon"
                style={styles.weatherIcon} 
            />
            <p style={styles.info}>Wind: {weather.wind.speed} m/s</p>
        </div>
    );
};

const styles = {
    weatherCard: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        color: "#333",
        padding: "1rem",
        borderRadius: "30px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        maxWidth: "400px",
        margin: ".1rem auto",
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: "700",
        marginBottom: "0.5rem",
    },
    info: {
        fontSize: "1.1rem",
        fontWeight: "500",
        margin: "0.3rem 0",
    },
    weatherIcon: {
        width: "100px",
        height: "100px",
    },
    loadingText: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        fontSize: "1.1rem",
        textAlign: "center",
        marginTop: "1rem",
    }
};

export default CountryWeather;
