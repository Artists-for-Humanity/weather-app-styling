import React from "react";

const CountryList = ({ countries, setSearchQuery }) => {
    return (
        <div className="countriesList">
            {countries.map(
                country =>
                    <div key={country.cca3} onClick={() => setSearchQuery(country.name.common)}>{country.name.common}</div>)
            }
        </div>
    )
}

export default CountryList