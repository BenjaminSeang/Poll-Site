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

const addNewInput = () => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<label htmlFor='option'>Options</label><input name='option' type='text' />"
    document.getElementById("pollForm").appendChild(newDiv);
}


const submitPollHandler = () => {
    // Logic
}

const CreateVote = (props) => {

    const [pollList, setPollList] = useState()
    const [pollOptions, setPollOptions] = useState()

    return(

        <div>
            <Header />

            <CreatePollContainer>
            <div>
                <h1>Poll Form</h1>
                <div id="pollForm">
                    <div>
                        <div>
                            <label>Poll question</label>
                            <input 
                                style={{width: "22em"}}
                                placeholder='What is the best sandwhich at McDonalds'/>
                        </div>
                        <div>
                            <label htmlFor="option">Option</label>
                            <input 
                                name="option"
                                type="text"
                                />
                            
                        </div>
                        <Button 
                            buttonText={"+"}
                            action={addNewInput}
                            color={"#555358"}
                            style={{color: "#FFFFFF"}}
                            />
                    </div>
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