import Logo from "../elements/logo/Logo";
import Sides from "../elements/Sides";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../asstes/loginimg.png"
import side from "../asstes/login.png"
// import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css"
import warn from "../elements/warn";
import Form from "../elements/Form";


let Signup = () => {

  
    //navigate hook
    const navigate = useNavigate();

    //state variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [name, setName] = useState("");

    //login validations
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setIsValid(validateEmail(e.target.value));
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    //login submit
    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        if (email === '' || password === '') {
            warn("Enter all fields 😕");
        }
        else
        {
            if (!isValid) {
                warn('Incorrect Email ID😕');
            }
            else 
            {
                try {

                    const response = await fetch('http://localhost:5000/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: email, password: password }),
                    });
                    if (response.ok) {
                        const data = await response.json();
                        // Store the token in local storage
                        localStorage.setItem('token', data.token);
                        console.log(data.token);
                        if(data.role === 'admin'){
                        navigate('/admin/dashboard');
                        }
                        else if(data.role === 'staff')
                        {
                            navigate("/staff/profile");
                        }
                    } 
                    else {
                        warn("Invalid Login Credentials!");
                    }

                } 
                catch (error) {
                    warn(error);
                }
            }
        }
    }
    const fields = [
        { type:"text", placeholder:"email ",  onChange:handleEmail },
        { type:"password", placeholder:"password",  onChange:handlePassword }
    ];
    return (
        <div className="signup">
            <div>
                <Logo />
            </div>
            <div className="signup-container">
                <div className="signup-left">
                    <div className="sides">
                        <Sides source={side} />
                    </div>
                </div>
                <div className="signup-right">
                    <div className="wrapper">
                        <div>
                            <img src={login} alt="login" />
                        </div>
                        <div className="form">
                        <Form fields={fields} onSubmit={handleSubmit} txt="LOGIN"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Signup;