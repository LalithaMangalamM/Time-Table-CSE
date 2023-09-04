import React from "react";
import Logo from "../elements/logo/Logo";
import adminDash from "../asstes/admin-dash.png";
import Sides from "../elements/Sides";
import send from "../asstes/send 1.png"
import "./adminDash.css";
import Input from "../elements/input/Input";
import { useNavigate } from "react-router-dom";

const AdminDash = () => {

    const navigate = useNavigate()
    const handleAddDetails = () => {
        navigate("/admin/add")
    }
    const handleProfile = () =>{
        navigate("/staff/profile")
    }

    return (
        <div className="addash">
            <div className="header">
                <Logo />
                <div className="prof" onClick={handleProfile}></div>
                {/* <p>Profile</p> */}
            </div>
            <div className="addash-container">
                <div className="addash-left">
                    <div className="addash-side">
                        <Sides source={adminDash} />
                    </div>
                </div>
                <div className="addash-right">
                    <div className="addash-wrapper">
                        <div className="1">
                            <Input text="Here, you will create a new time table for Individual Classes." bt="Create Table" />
                        </div>
                        <div className="2">
                            <Input text="Here, you can view a time table for Individual Staffs." bt="View Table" />
                        </div>
                        <div className="3">
                            <Input text="Here, you can able to add the subject details for individual staffs." onClick={handleAddDetails}
 bt="Add Details" />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDash;