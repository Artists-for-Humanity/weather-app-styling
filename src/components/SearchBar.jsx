import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div style={styles.container}>
            <label htmlFor="search" style={styles.label}>Find Country:</label>
            <input
                type="text"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={styles.input}
                placeholder="Enter country name..."
            />
        </div>
    );
};

const styles = {
    container: {
        fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
        textAlign: "center",
        marginBottom: "1.5rem",
        color: "#45a7e9",
    },
    label: {
        fontSize: "1.1rem",
        fontWeight: "500",
        marginRight: "0.5rem",
        color: "#333",
    },
    input: {
        fontSize: "1rem",
        padding: "0.5rem 1rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
        width: "250px",
        outline: "none",
        transition: "border-color 0.3s",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
};

export default SearchBar;
