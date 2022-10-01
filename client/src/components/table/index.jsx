import React, {useEffect, useState} from 'react';
import axios from "axios";
import { dateConverter } from "../../utils/dateConverter";
import "./style.scss"
import TopContainer from "../topcontainer";
import BottomContainer from "../bottomcontainer";
import TableStructure from "./tableStructure";

const TablePurchase = () => {
    //data state to store the purchase API
    const [data, setData] = useState({})

    const [query, setQuery] = useState('')

    const [filter, setFilter] = useState('name')

    const [alg, setAlg] = useState('contains')

    const [perPage, setPerPage] = useState(10)

    const [currentPage, setCurrentPage] = useState(1)

    //using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            const result = await axios(`http://localhost:5000/api/purchase?q=${query}&f=${filter}&a=${alg}&perPage=${perPage}&currentPage=${currentPage}`);
            setData({items : [...result.data.items.map(row => ({ ...row, created_at: dateConverter(row.created_at)}))],
                            pages : result.data.pages})
        })();
    }, [query, alg, filter, perPage, currentPage])

    useEffect(() => {}, [data]);

    let displayClass = ''
    if(data.length<perPage){
        displayClass='display_n'
    }
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div >
            <div className={'container'}>
                <TopContainer setQuery={setQuery}
                              alg={alg}
                              setAlg={setAlg}
                              filter={filter}
                              setFilter={setFilter}
                              dropdownClass={'header-dd'}
                                />
                <TableStructure length={data.items?.length} data={data.items}></TableStructure>
                <BottomContainer setCurrentPage={setCurrentPage}
                                 currentPage={currentPage}
                                 countPages={data.pages}
                                 paginate={paginate}
                                 setPerPage={setPerPage}
                                 perPage={perPage}
                                 displayClass={displayClass}/>
            </div>
        </div>

    );

};

export default TablePurchase;