import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import Button from '../components/Button/Button';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

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

    const [pollList, setPollList] = useState([]);
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

    const inputHandler = (event) => {
        let newStateObject = {...newPoll};
        newStateObject[event.target.name] = event.target.value;
        setNewPoll(newStateObject);
    }

    const submitPollHandler = (event) => {
        event.preventDefault();

    }

    const newPollHandler = (event) => 
    {
        event.preventDefault();

        axios.post('http://localhost:8000/api/polls/create',
        newPoll,
        {
            withCredentials: true
        })
        .then ( (response) =>
            {
                console.log(response);
                console.log(response.data);
                
                setNewPoll ({
                        pollQuestion: "",
                        options: [
                            {
                                option: "",
                                votes: ""
                            }]
                    })
                
                Navigate("/");
            })
        .catch ( (error) => 
            {
                console.log(error);
                setErrors(error.response.data.errors);
            });
    } 
    
    const addNewOption = () => {
        setPollOptions([...pollOptions, {option: ""}])
    }

    const removeOption = (index) => {
        const list = [...pollOptions];
        list.splice(index, 1);
        setPollOptions(list);
    }

    return(

        <div>
            <Header />

            <CreatePollContainer>
                <form onSubmit={newPollHandler}>
                    <h1>Poll Form</h1>
                    <div id="pollForm">
                        <div>
                            <div>
                                <label>Poll question</label>
                                <input 
                                    style={{width: "22em"}}
                                    placeholder='What is the best sandwhich at McDonalds'
                                    onChange={inputHandler}/>
                            </div>
                            <div>
                                {
                                    pollOptions.map( (option,index) => 
                                    (
                                        <div key={index}>
                                            <div>
                                                <label htmlFor="option">Option</label>
                                                <input 
                                                    name="option"
                                                    type="text" 
                                                    onChange={inputHandler}/>
                                                {
                                                    pollOptions.length - 1 === index && pollOptions.length < 5 &&
                                                    (
                                                        <Button 
                                                            buttonText={"+"}
                                                            action={addNewOption}
                                                            color={"#555358"}
                                                            style={{color: "#FFFFFF"}}/>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                {
                                                    pollOptions.length !== 1 && 
                                                    (
                                                        <Button 
                                                            buttonText={"-"}
                                                            action={removeOption}
                                                            color={"#555358"}
                                                            style={{color: "#FFFFFF"}}/>
                                                    )
                                                }
                                            </div>
                                            
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <Button 
                            buttonText={"Submit"}
                            action={submitPollHandler}
                            color={"#C4C4C4"}
                            />
                    </div>
                </form>

            </CreatePollContainer>
        </div>
    )
}

export default CreateVote;