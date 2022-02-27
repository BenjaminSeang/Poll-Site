import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

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

const loginHandler = () => {

}

const createNewUser = () => {

}
    return(
        <LoginFormContainer>
            <div style={{marginBottom: "2em"}}>
                <h1>Login</h1>
                <div>
                    <div>
                        <label>Username</label>
                        <input />
                    </div>
                    <div>
                        <label>Password</label>
                        <input />
                    </div>
                </div>
                <Button 
                        buttonText={"Submit"}
                        action={loginHandler}
                        color={"#C4C4C4"}
                        />
            </div>

            <div>
                <h1>Not a member yet? Register</h1>
                <div>
                    <div>
                        <label>First name</label>
                        <input />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input />
                    </div>
                    <div>
                        <label>Username</label>
                        <input />
                    </div>
                    <div>
                        <label>Password</label>
                        <input />
                    </div>
                </div>
                <Button 
                        buttonText={"Create User"}
                        action={createNewUser}
                        color={"#C4C4C4"}
                        />
            </div>


        </LoginFormContainer>
    )
}

export default LoginForm