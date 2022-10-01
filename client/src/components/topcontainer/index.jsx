import React from 'react';
import Search from "../search";
import Dropdown from "../dropdown/dropdown";
import {COLUMN_FILTER, OPERATIONS_FILTER} from "../table/constants";

const TopContainer = ({setQuery, alg, setAlg, filter, setFilter, dropdownClass}) => {
    return (
        <div className={'filter-container'}>
            <Search setQuery={setQuery}/>
            <Dropdown placeHolder={alg} options={OPERATIONS_FILTER} setPlaceHolder={setAlg}
                      dropdownClass={dropdownClass}/>
            <Dropdown placeHolder={filter}
                      options={COLUMN_FILTER}
                      setPlaceHolder={setFilter}
                      dropdownClass={dropdownClass}/>
        </div>
    );
};

export default TopContainer;