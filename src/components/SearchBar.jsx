import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div class='search_container'>
            <label class='location' htmlFor="search">Location </label>
            <input
                class='search_value'
                type="text"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default SearchBar