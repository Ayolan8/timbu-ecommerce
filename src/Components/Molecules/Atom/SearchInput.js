import React from "react";
import SearchIcon from '../../../assets/search-icon.png';
import CloseVector from '../../../assets/close-Vector.png';
import '../../HeaderCss.css';

const SearchInput = () => {
    return (
        <form>
            <label htmlFor="search"></label>
            <input 
                type="text"
                value= ""
                placeholder="Search for anything"
                className="searchinput"
            />
        </form>
    )
}

export default SearchInput