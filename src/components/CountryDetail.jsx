import React from "react";
import CountryWeather from "./CountryWeather";

const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags} = country;

    return (
        <div>
            <h2>{name.common}</h2>
            <p><strong>Capital:</strong> {capital?.[0]}</p>
            <p><strong>Area:</strong> {area} km²</p>
            <h3>Languages:</h3>
            <ul>
                {Object.values(languages).map((language) => <li key={language}>{language}</li>)}
            </ul>
            <img src={flags.svg} alt={`Flag of ${name.common}`}
                style={{
                    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.1)",
                    width: "300px", // Optional: Adjust the size
                    height: "auto", // Optional: Maintain aspect ratio
                }} />
            <CountryWeather capital={capital?.[0]}/>
        </div>
    );
};

export default CountryDetails;
