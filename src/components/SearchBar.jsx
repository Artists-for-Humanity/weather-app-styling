import React from "react";

const SearchBar = ({value, onChange}) => {
    return (
        <div className="searchBar">
            <input 
                placeholder="Find a Country"
                type="text"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar