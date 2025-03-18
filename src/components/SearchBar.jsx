import React from "react";

const SearchBar = ({value, onChange}) => {
    return (
        <div className='find'>
            <input 
                type="text"
                id="search"
                value={value}
                placeholder="Search a Country"
                onChange={(e) => onChange(e.target.value)} 
            />
        </div>
    )
}

export default SearchBar