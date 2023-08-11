import Logo from "../elements/logo/Logo";
import Sides from "../elements/Sides";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../asstes/loginimg.png"
import side from "../asstes/login.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./signup.css"


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
            toast.warn('Enter all fields 😕', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        else
        {
            if (!isValid) {
                toast.warn('Incorrect Email ID😕', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
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
                        // const data = await response.json();
                        // setName(data.name)
                        // if(data.role === 'admin')
                        navigate('/admin/dashboard');
                    } else {
                        toast.warn('Invalid login credentials!', {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    }

                } 
                catch (error) {
                    toast.warn(error, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });

                }
            }
        }
    }
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
                            <form onSubmit={handleSubmit}>
                                <input  className = "input1" type="text" placeholder="email " onChange={handleEmail} ></input><br />
                                <input className = "input1" type="password" placeholder="password" onChange={handlePassword}></input><br />
                                <button className="signup-button" type="submit" >LOGIN</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default Signup;