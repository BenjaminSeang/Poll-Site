import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import * as S from './Header.style'
import Button from '../Button/Button';

const Header = (props) => {

    const [user, setUser] = useState({});

    let navigate = useNavigate();

    const goHome = () => { navigate("/") }
    const goCreateVote = () => { navigate("/createvote") }
    const goManageVotes = () => { navigate(`/managevotes/${user.username}`) }
    const goLogIn = () => { navigate("/login") }

    const goLogout = (e) => {
        axios
        .post(
            "http://localhost:8000/api/users/logout",
            {},
            {
                withCredentials: true,
            },
        )
        .then((res) => {
            console.log(res);
            console.log(res.data);
            if(setUser){
                setUser({});
            }
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/secure",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    if(user.username){
        return(
            <S.HeaderContainer>
                <S.Title>EZ Poll </S.Title>
                <div>
                    <div style={{display: 'flex', width: "22em", justifyContent: 'space-evenly',}}>
                        <Button 
                            buttonText={"Home"}
                            action={goHome}
                            color={"#C4C4C4"}
                            />
                        <Button 
                            buttonText={"Create"}
                            action={goCreateVote}
                            color={"#C4C4C4"}
                            />
                        <Button 
                            buttonText={"Manage"}
                            action={goManageVotes}
                            color={"#C4C4C4"}
                            />
                        <Button 
                            buttonText={"Logout"}
                            action={goLogout}
                            color={"#D5E758"}
                            />
                    </div>
                </div>
            </S.HeaderContainer>
        )
    }else{
        return(
            <S.HeaderContainer>
                <S.Title>EZ Poll </S.Title>
                <div>
                    <div style={{display: 'flex', width: "22em", justifyContent: 'space-evenly',}}>
                        <Button 
                            buttonText={"Home"}
                            action={goHome}
                            color={"#C4C4C4"}
                            />
                        <Button 
                            buttonText={"Login"}
                            action={goLogIn}
                            color={"#D5E758"}
                            />
                    </div>
                </div>
            </S.HeaderContainer>
        )
    }
    
}

export default Header 