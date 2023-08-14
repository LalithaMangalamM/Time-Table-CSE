import React from "react";
import Logo from "../elements/logo/Logo";
import adminDash from "../asstes/admin-dash.png";
import Sides from "../elements/Sides";
import Input from "../elements/input/Input";
import "./staffDash.css";

const StaffDash = () => {
    return (
        <div className="staffdash">
            <div>
                <Logo />
            </div>
            <div className="staffdash-container">
                <div className="staffdash-left">
                    <div className="staffdash-side">
                        <Sides source={adminDash} />
                    </div>
                </div>
                <div className="staffdash-right">
                    <div className="staffdash-wrapper">
                        <div className="1">
                            <Input text="In this section you can view the Class time table." bt="View Class Timetable" />
                        </div>
                        <div className="2">
                            <Input text="In this section you can view your time table." bt="View yours" />
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default StaffDash;