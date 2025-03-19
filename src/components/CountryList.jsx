import React from "react";

const CountryList = ({ countries, setSearchQuery }) => {
    return (
        <ul>
            {countries.map(
                country =>
                    <li  className="optionCountry">
                        <button onClick={() => setSearchQuery(country.name.common)}>
                          <li className="optionCountry" key={country.cca3}>{country.name.common}</li>
                        </button>
                    </li>)
            }
        </ul>
    )
}

export default CountryList