import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';


const CircleBig = styled.div`
    background: #D5E758;
    width: 200px;
    height: 200px;
    border-radius: 50%;
`

const CircleSmall = styled.div`
    background: #C4C4C4;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: -3.5em;
`


const SignUpContainer = styled.div`
    margin-top: 5em;
    margin-left: 4em;
    display: flex;
`
const SignUpHeader = styled.h2`
    font-size: 3em;
`

const SignUp = (props) => {
    
    const signIn = () =>{

    }
    return(
        <SignUpContainer>
            <div style={{marginRight: "10em"}}>
                <SignUpHeader style={{marginBottom: "0.2em"}}>Want to create a poll?</SignUpHeader>
                <Button 
                    buttonText={"Sign Up"}
                    action={signIn}
                    color={"#FFE700"}
                    style={{width: "6em", height: "2.5em", fontSize: "1em", fontWeight: "bolder"}}
                />
            </div>
            <div>
                <CircleBig />
                <CircleSmall />
            </div>
        </SignUpContainer>
    )
}

export default SignUp