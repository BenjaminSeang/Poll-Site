import React from 'react';
import { useNavigate } from "react-router-dom";
import * as S from './Header.style'
import Button from '../Button/Button';

const Header = (props) => {

    let navigate = useNavigate();

    const goHome = () => { navigate("/") }
    const goCreateVote = () => { navigate("/createvote") }
    const goManageVotes = () => { navigate("/managevotes") }
    const goLogIn = () => { navigate("/login") }
    const goLogout = () => { 
        //added functionality after click
        navigate("/") 
    }

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
                        buttonText={"Login"}
                        action={goLogIn}
                        color={"#D5E758"}
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
}

export default Header 