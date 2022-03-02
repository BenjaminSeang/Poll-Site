import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Header from '../components/Header/Header';


const VoteCardContainer = styled.div`
    background-color: #555358;
    height: 400px;
    padding: 3em 4em;
    border-radius: 20px;
`

const VoteCardTitle = styled.h2`
    color: #FFFFFF;
    width: 600px;
    font-size: 2em;
`
const VoteCardSubTitle = styled.h3`
    color: #FFFFFF;
`

const WhiteCircle = styled.div`
    background: #C4C4C4;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: -3.5em;
`

const PollDetail = (props) => {

    const { pollid } = useParams();
    const [poll, setPoll] = useState({});
    const [options, setOptions] = useState ([]);
    const [votedOption, setVotedOption] = useState("");
    const [errors, setError] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/polls/${pollid}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setPoll(res.data);
                setOptions(res.data.options);
            })
            .catch((err)=>{
                console.log(err);
            });
    }, [])

    const submitHandler = (e) => {
        axios.post(`http://localhost:8000/api/polls/vote/${pollid}`,
            {votedOption},
            {withCredentials: true}
        )
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            
        })
        .catch((err)=>{
            console.log(err);
            console.log("err.response:", err.response);
            console.log("err.response.data:", err.response.data);
            console.log("err.response.data.errors:", err.response.data.errors);
            setError(err.response.data.errors)
        })
    }

    return(
        <div>
            <Header />
            <form onSubmit={submitHandler}>
                <p>{poll.pollQuestion}</p>
                {
                    options.map((option, index) => (
                        <div key={index}>
                            <input 
                                type = "radio" 
                                value={option.option}
                                name = "option"
                                onChange = {(e)=>setVotedOption(e.target.value)}
                            />
                            {option.option} (current vote: {option.votes})
                        </div>
                    ))
                }
                <button>Submit</button>
            </form>
            
        </div>
    )
}

export default PollDetail