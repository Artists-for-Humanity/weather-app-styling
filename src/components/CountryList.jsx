import React from "react";

const CountryList = ({ countries, setSearchQuery }) => {
    return (
        <ul>
            {countries.map(
                country =>
                    <li key={country.cca3}>{country.name.common}
                        <button onClick={() => setSearchQuery(country.name.common)}>Show</button>
                    </li>)
            }
        </ul>
    )
}

export default CountryList