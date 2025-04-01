import React from "react";
import "../App.css"

const SearchBar = ({value, onChange}) => {
    return (
        <div class ="search">   
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