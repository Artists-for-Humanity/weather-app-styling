import React from "react";
import CountryWeather from "./CountryWeather";

const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags} = country;

    return (
        <div>
            <h1 class= "country">{name.common}</h1>
            <CountryWeather capital={capital?.[0]}/>

        </div>
    );
};

export default CountryDetails;
