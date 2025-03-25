import React from "react";
import './SearchBar.css'

const SearchBar = ({value, onChange}) => {

    // const style = {
    //     background: "red"
    // }

    return (
        <div className="">
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