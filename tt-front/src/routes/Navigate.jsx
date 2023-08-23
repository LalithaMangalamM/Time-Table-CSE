import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "../components/signup/Signup";
import AdminDash from "../components/adminDashboard/AdminDash";
import Display from "../components/addstaff/Display";
import Profile from "../components/profile/Profile";

const Navigate = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path = "/" element={ <Signup /> }></Route>
                <Route exact path = "/admin/dashboard" element={ <AdminDash /> }></Route>
                <Route exact path = "/admin/add" element={ <Display /> }></Route>
                <Route exact path = "/staff/profile" element={ <Profile/> }></Route>

            </Routes>
        </BrowserRouter>
    )
}

export default Navigate;