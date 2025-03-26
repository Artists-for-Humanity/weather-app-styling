import React from "react";
import CountryWeather from "./CountryWeather";
import '../../src/App.css'



const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags, independent } = country;
    console.log("is independent?", independent)

    return (
        <div class='inf_format'>
            <div className="flag_location">
                <CountryWeather capital={capital?.[0]} flagSvg={flags.svg} />
            </div>

        </div>
    );
};

export default CountryDetails;
