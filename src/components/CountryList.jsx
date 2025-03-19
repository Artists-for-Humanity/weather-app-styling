import React from "react";

const CountryList = ({ countries, setSearchQuery }) => {
    return (
        <ul style={{
            fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
            listStyle: "none",
            padding: "0",
            margin: "0 auto",
            maxWidth: "400px",
            backgroundColor: "#45a7e9",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden"
        }}>
            {countries.map(country => (
                <li key={country.cca3} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem",
                    borderBottom: "1px solid #ddd",
                    fontSize: "1.1rem"
                }}>
                    {country.name.common}
                    <button onClick={() => setSearchQuery(country.name.common)}
                        style={{
                            backgroundColor: "#646cff",
                            color: "white",
                            border: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "background-color 0.3s"
                        }}
                    >
                        Show
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CountryList;
