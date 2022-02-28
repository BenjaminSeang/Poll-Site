import React from 'react';
import styled from 'styled-components';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginFormContainer = styled.div`
    margin: 0 auto;
    margin-top: 3em;
    padding: 2em 3em;
    background-color: #ADE25D;
    width: 400px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px #555358;
`

const RegisterForm = (props) =>{

    let navigate = useNavigate();

    const [errors, setErrors] = useState("");
    const [confirmReg, setConfirmReg] = useState("");
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    const register = (event)=>{
        event.preventDefault();

        axios.post("http://localhost:8000/api/users/register",
        user,
        {
            withCredentials:true
        })
        .then((res)=>{
            console.log(res.data);
            setUser({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
            setConfirmReg(
                "Thank you for Registering, you can now log in!",
            );
            setErrors({}); 
        })
        .catch((err)=>{
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

    return(
        <LoginFormContainer>
            {confirmReg ? <h4 style={{ color: "green" }}>{confirmReg}</h4> : null}
            <h1>Register</h1>
            <form onSubmit={register}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.username ? (
                        <span className="error-text">
                            {errors.username.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    {errors.email ? (
                        <span>{errors.email.message}</span>
                    ) : null}
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    {errors.password ? (
                        <span>
                            {errors.password.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword ? (
                        <span>
                            {errors.confirmPassword.message}
                        </span>
                    ) : null}
                </div>
                <div>
                    <button>Register</button>
                </div>
            </form>
        </LoginFormContainer>
    )
}

export default RegisterForm;