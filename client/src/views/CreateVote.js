import React, { useState } from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

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

    let navigate = useNavigate();

    const [options, setOptions] = useState([{option: ""}]);

    const [pollQuestion, setPollQuestion] = useState("");

    const [errors, setError] = useState({})

    const optionHandler = (e, index) => {
        const {name, value} = e.target;
        const list = [...options];
        list [index][name] = value;
        setOptions(list);
    };

    const removeHandler = (index) => {
        const list = [...options];
        list.splice(index, 1);
        setOptions(list);
    };

    const addHandler = () => {
        setOptions([ ...options, {option: ""} ]);
    };

    const pollQuestionHander = (e) => {
        setPollQuestion(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let newObject = {pollQuestion: "", options:[]}
        newObject.pollQuestion = pollQuestion;
        newObject.options = options;
        
        axios.post("http://localhost:8000/api/polls/create", {pollQuestion, options}, {withCredentials: true})
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                console.log("err.response.data.errors:", err.response.data.errors);
                setError(err.response.data.errors)
            })

    }
 
    return (
        <div>
            <Header />
            <form onSubmit={submitHandler}>
                <div>
                    <label>Enter a topic for your poll:</label>
                </div>
                <input
                    name = "pollQuestion"
                    value = {pollQuestion}
                    onChange = {(e) => pollQuestionHander(e)}
                />
                {options.map((option, i) => {
                    return (
                    <div key={i}>
                        <div>
                            <label> Option #{i+1} </label>
                        </div>
                        <input
                            name="option"
                            value={option.option}
                            onChange={(e) => optionHandler(e, i)}
                        />
                        <div>
                            {options.length !== 1 && 
                            <button onClick={() => removeHandler(i)}>Remove</button>}

                            {options.length - 1 === i && 
                            <button onClick={() => addHandler()}>Add</button>}
                        </div>
                    </div>
                    );
                })}
                <button>Submit</button>
            </form>

            
        </div>
    );

}

export default CreateVote;

