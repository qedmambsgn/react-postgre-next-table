import React from 'react';

const TableStructure = ({length, data}) => {
    return (
        <div className={'table'}>
            {length ?
                <table>
                    <thead>
                    <tr>
                        <th>Data</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Distance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((item, index) => (
                        <tr key={item.name+index}>
                            <td>{item.created_at}</td>
                            <td>{item.name}</td>
                            <td>{item.amount}</td>
                            <td>{item.distance}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                :
                <div>Не найдено</div>
            }
        </div>
    );
};

export default TableStructure;