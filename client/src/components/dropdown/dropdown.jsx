import React from 'react';
import './dropdown.scss'

const Dropdown = ({ placeHolder, options, setPlaceHolder, dropdownClass, setCurrentPage, currentPage, maxCountPages}) => {
    return (
        <select className={ dropdownClass } placeholder={placeHolder} onChange={(e) => {
            setPlaceHolder(e.target.value.toLowerCase())
            if(currentPage > maxCountPages){
                setCurrentPage(currentPage-1)
            }
        }}>
            {options.map((option) => (
            <option key={option.value} className={'dropdown-item'} >
                {option.value}
            </option>
            ))}
        </select>
    );
};

export default Dropdown;