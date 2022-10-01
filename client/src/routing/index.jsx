import * as React from "react";
import { Route, Routes } from 'react-router-dom'
import TablePage from "../pages";


const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<TablePage />}> </Route>
        </Routes>
    )
}

export default Routing;