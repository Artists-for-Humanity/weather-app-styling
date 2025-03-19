import React from "react";
import CountryWeather from "./CountryWeather";

const CountryDetails = ({ country }) => {
    const { name, capital, area, languages, flags } = country;

    return (
        <div style={{
            fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            color: "#333",
            backgroundColor: "#f9f9f9",
            padding: "1px",
            borderRadius: "30px",
            boxShadow: "0 5px 15px rgba(75, 204, 255, 0.94)",
            maxWidth: "600px",
            margin: "auto",
            textAlign: "center",
        }}>
            <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                {name.common}
            </h2>

            <p style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>
                <strong>Capital:</strong> {capital?.[0]}
            </p>

            <p style={{ fontSize: "1.1rem", margin: "0.5rem 0" }}>
                <strong>Area:</strong> {area} km²
            </p>

            <h3 style={{
                fontSize: "1.2rem",
                marginTop: "1rem",
                textDecoration: "underline",
                fontWeight: "600"
            }}>Languages:</h3>

            <ul style={{
                listStyle: "none",
                padding: 0,
                fontSize: "1rem",
                marginTop: "-0px"
            }}>
                {Object.values(languages).map((language) => (
                    <li key={language} style={{
                        padding: "0.3rem 0",
                        fontWeight: "500"
                    }}>{language}</li>
                ))}
            </ul>

            <img 
                src={flags.svg} 
                alt={`Flag of ${name.common}`}
                style={{
                    boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                    width: "250px",
                    height: "auto",
                    borderRadius: "8px",
                    marginTop: ".1rem"
                }} 
            />

            <CountryWeather capital={capital?.[0]} />
        </div>
    );
};

export default CountryDetails;
