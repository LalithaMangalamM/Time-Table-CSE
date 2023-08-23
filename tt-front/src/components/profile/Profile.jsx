import React, { useState, useEffect } from 'react';
import Logo from "../elements/logo/Logo";
import "./profile.css";
import ProfileDis from "./ProfileDis";

const Profile = () => {

    const [profile, setProfile] = useState({
        name: "",
        email: "",
        role: ""
    });
    const token = localStorage.getItem('token');
    console.log(`hi ${token}`);
    useEffect(() => {
        // Fetch the user data using the JWT token
        fetch('http://localhost:5000/profile', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(value => {
                setProfile({
                    name: value.name,
                    email: value.email,
                    role: value.role
                });
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const data = [{ label: "Name:", value: profile.name }, { label: "E-Mail:", value: profile.email }, { label: "Role:", value: profile.role }]


    return (
        <div className="profile">
            <div>
                <Logo />
            </div>
            <div className="profilecontainer">
                <div className="profileleft">
                    <div className="piccontainer">
                        <div className="pic">
                            <div class="camera-icon">
                                <i class="fas fa-camera"></i>
                            </div>

                        </div>
                    </div>
                    <ProfileDis data={data} />
                </div>
                <div className='rightholder'>
                    <div className="profileright">

                        <p>Hello</p>
                    </div>
                    <div className='buttons'>
                        <button className='profilebutton'>Change Password</button>
                        <button className='profilebutton'>Download Timetable</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile;