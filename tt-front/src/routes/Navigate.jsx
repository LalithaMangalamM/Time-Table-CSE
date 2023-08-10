import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../components/signup/Signup";
import AdminDash from "../components/adminDashboard/AdminDash";

const Navigate = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" element={ <Signup /> }></Route>
                <Route exact path = "/admin/dashboard" element={ <AdminDash /> }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Navigate;