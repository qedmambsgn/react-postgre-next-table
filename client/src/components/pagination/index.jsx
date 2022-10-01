import React from 'react';

const Pagination = ({countPages, paginate, currentPage}) => {
    const purchasesNumbers = [];
    if(countPages > 10) {
        if(currentPage > 5) {
            for (let i = currentPage-4; i <= currentPage+5; i++) {
                purchasesNumbers.push(i)
                if(i === countPages) break
            }
        }
        else {
            for (let i = 1; i <= 10; i++) {
                purchasesNumbers.push(i)
                if(i === countPages) break
            }
        }
    }  else {
        for (let i = 1; i <= countPages; i++) {
            purchasesNumbers.push(i)
        }
    }
    console.log(purchasesNumbers)
    return (
        <div className={'pagination'}>
            <nav>
                <ul>
                    {purchasesNumbers.map(number => (
                        <li className={currentPage===number ? 'chosenPage' : ''} key={number}>
                            <button onClick={() => paginate(number)} >
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;