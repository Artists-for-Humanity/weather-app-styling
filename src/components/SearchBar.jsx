import React from "react";

const SearchBar = ({value, onChange}) => {
    return (
        <div>
            <label htmlFor="search">Find Country: </label>
            <input 
                type="text"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar