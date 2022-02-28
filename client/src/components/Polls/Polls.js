import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom/react-router-dom.development';

const PollsContainer = styled.div`
    margin-right: 5em;
    margin-left: 3em;
    margin-bottom: 2em;
    padding-bottom: 3em;
`

const PollsTitle = styled.h2`
    color: #555358;
    font-size: 4em;
    display: flex;
    justify-content: flex-end;
`
const PollLink = styled.p`
    color: #FFFFFF;
    margin-bottom: 1em;
    display: flex;

`

const PollLinkClicked = styled.p`
    color: #555358;
    margin-bottom: 1em;
    font-weight: bolder;
`

const stub_data = 123
const Polls = (props) => {

    const [polls, setPolls] = useState([])

    useEffect(() => {
    // setPolls(stub_data)
        // axios call
        axios.get("http://localhost:8000/api/allPolls")
            .then((res) => {
                console.log(res.data);
                setPolls(res.data);
            })
            .catch((err) => console.log("Display all, useEffect: " + err))
    }, [])

    return(

        <PollsContainer >
            <PollsTitle>Live Polls</PollsTitle>
            <div>
                {
                    polls?
                    polls.map( (poll, index) => (
                    
                    // Route to render this question
                    <div key={index}>
                        <PollLink >{poll.pollQuestion}</PollLink>
                    </div>
                    
                    )) 
                    : null
                } 
            </div>
        </PollsContainer>
    )
}

export default Polls