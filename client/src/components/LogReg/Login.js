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

const LoginForm = (props) => {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");

    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                },
            )
            .then((res) => {
                console.log(res,);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.message);
            });
    }

    return(
        <LoginFormContainer>
            <h1>Login</h1>
            <p>{errors ? errors : ""}</p>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button>Sign In</button>
                </div>
            </form>
        </LoginFormContainer>
    )
}

export default LoginForm;