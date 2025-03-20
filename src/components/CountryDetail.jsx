import React from "react";
import CountryWeather from "./CountryWeather";

const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags} = country;

    return (
        <div>
            <h2 className="name">{name.common}, {capital}</h2>
            <CountryWeather capital={capital?.[0]}/>
        </div>
    );
};

export default CountryDetails;
