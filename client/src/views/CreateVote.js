import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import Button from '../components/Button/Button';

const CreatePollContainer = styled.div`
    margin: 0 auto;
    margin-top: 3em;
    padding: 2em 3em;
    background-color: #ADE25D;
    width: 400px;
    border-radius: 20px;
    box-shadow: 3px 3px 10px #555358;
`


const CreateVote = (props) => {

    const [pollOptions, setPollOptions] = useState([{option:""}]);
    const [errors, setErrors] = useState({});

    const [newPoll, setNewPoll] = useState({
        pollQuestion: "",
        options: [
            {
                option: "",
                votes: ""
            }
        ]
    })


const CreateVote = (props) => {

    const [pollList, setPollList] = useState()
    const [pollOptions, setPollOptions] = useState()

    return(

        <div>
            <Header />

            <CreatePollContainer>
            <div>
                <h1>Poll Form</h1>
                <div>
                    <div>
                        <div>
                            <label>Poll question</label>
                            <input 
                                style={{width: "22em"}}
                                placeholder='What is the best sandwhich at McDonalds'/>
                        </div>
                        <div>
                            <label>Options</label>
                            <input />
                        </div>
                    </div>
                    <Button 
                        buttonText={"+"}
                        action={submitPollHandler}
                        color={"#555358"}
                        style={{color: "#FFFFFF"}}
                        />

                </div>
                <Button 
                    buttonText={"Submit"}
                    action={submitPollHandler}
                    color={"#C4C4C4"}
                    />
            </div>


        </CreatePollContainer>
            
        </div>
    )
}

export default CreateVote