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
          console.log('API called');
        } catch (error) {
          console.error("Error fetching weather data: ", error);
        }
      }
      setLoading(false);
    };
    fetchWeather();
  }, [capital]);

  useEffect(() => {
    if (weather) {
      const temp = weather.main.temp;

      let gradient;
      if (temp < 40) {
        gradient = 'linear-gradient(rgb(0,0,0), rgb(135, 206, 235))'; // Grey to Blue
      } else if (temp > 70) {
        gradient = 'linear-gradient(rgb(0,0,0), rgb(255, 0, 0))'; // Grey to Red
      } else {
        gradient = 'linear-gradient(rgb(0,0,0), rgb(38, 139, 7))'; // Grey to Yellow
      }

      // Modify the body's background
      document.body.style.backgroundImage = gradient;
    }
  }, [weather]);

  if (loading) return <p>Loading ...</p>;
  if (!weather) return <p>No weather data available</p>;

  return (
    <div style={{ width: "80vw", height: "100vh", color:"grey"}}>
      <h1 className="Temp">{weather.main.temp}°F</h1>
      <h3 className="Wind">Wind {weather.wind.speed} m/s</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="Weather Icon"
      />
    </div>
  );
};

export default CountryWeather;
