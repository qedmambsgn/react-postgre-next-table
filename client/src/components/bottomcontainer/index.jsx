import React from 'react';
import Dropdown from "../dropdown/dropdown";
import {PAGINATION} from "../table/constants";
import Pagination from "../pagination";

const BottomContainer = ({perPage, setPerPage, displayClass, setCurrentPage, currentPage, paginate, maxCountPages, countPages}) => {
    return (
        <div className={'footer'}>
            <Dropdown placeHolder={perPage} options={PAGINATION} setPlaceHolder={setPerPage}
                      dropdownClass={displayClass} setCurrentPage={setCurrentPage} currentPage={currentPage}
                      maxCountPages={maxCountPages}/>
            <Pagination currentPage={currentPage} countPages={countPages}
                        paginate={paginate}/>
        </div>
    );
};

export default BottomContainer;