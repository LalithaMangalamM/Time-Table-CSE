import React from "react";
import Logo from "../elements/logo/Logo";
import adminDash from "../asstes/admin-dash.png";
import Sides from "../elements/Sides";
import send from "../asstes/send 1.png"
import "./adminDash.css";

const AdminDash = () => {
    return (
        <div className="addash">
            <div>
                <Logo />
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
                    <p>Here, you will create a new time table for Individual Classes.</p>
                    <div className="tabs">
                    <div>
                    <img src={send} />
                    </div>
                    <div>
                    <button className="button">Create Table</button></div>
                    </div>
                </div>
                <div className="2">
                    <p>Here, you can view a time table for Individual Staffs.</p>
                    <div className="tabs">
                    <div>
                    <img src={send} />
                    </div>
                    <div>
                    <button className="button">View Table</button></div>
                    </div>
                </div>
                <div className="3">
                    <p>Here, you can able to add the subject details fo individual staffs.</p>
                    <div className="tabs">
                    <div>
                    <img src={send} />
                    </div>
                    <div>
                    <button className="button">Add Details</button></div>
                    </div>
                </div>

                </div>

                </div>

            </div>

        </div>
    )
}

export default AdminDash;