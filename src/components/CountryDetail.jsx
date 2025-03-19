import React from "react";
import CountryWeather from "./CountryWeather";
import '../../src/App.css'



const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags } = country;

    return (
        <div class='inf_format'>
            <img src={flags.svg} alt={`Flag of ${name.common}`}
                style={{
                    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.1)",
                    width: "100px", // Optional: Adjust the size
                    height: "auto", // Optional: Maintain aspect ratio
                }} />
            <p><strong>{name.common}</strong> capital: {capital?.[0]}, area: {area} km², Languages: {Object.values(languages).map((language) => { language })}</p>
            <CountryWeather capital={capital?.[0]} />
        </div>
    );
};

export default CountryDetails;
