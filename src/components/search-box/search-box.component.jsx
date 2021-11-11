import React from "react";
import './search-box.style.css'

export const SearchBox = ({placeholder, onChangeHandler}) => (
    <input className="searchBox" type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)