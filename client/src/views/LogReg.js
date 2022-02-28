import React from 'react';
import Header from '../components/Header/Header';
import LoginForm from '../components/LogReg/Login';
import RegisterForm from '../components/LogReg/Regiser';

const LogReg = (props) => {

    return(

        <div>
            <Header />
            <LoginForm />
            <RegisterForm />
        </div>

    )
}

export default LogReg