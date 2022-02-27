import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import axios from 'axios';

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
    setPolls(stub_data)
        //axios call
        // axios.get("http://localhost:8000/api/allPolls")
        //     .then((res) => {
        //         console.log(stub_data);
        //     })
        //     .catch((err) => console.log("Display all, useEffect: " + err))
    }, [])

    return(

        <PollsContainer >
            <PollsTitle>Live Polls</PollsTitle>
            <div>
                <PollLink>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?</PollLink>
                <PollLink>Lorem ipsum dolor sit amet, consectetur adipiscing, do?</PollLink>
                <PollLink>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do?</PollLink>
                <PollLinkClicked>How good is McDonald's</PollLinkClicked>
                <PollLink>Lorem ipsum dolor sit amet, adipiscing elit, sed do?</PollLink>
                <PollLink>Lorem ipsum dolor, consectetur adipiscing elit, sed do?</PollLink>
            </div>
        </PollsContainer>
    )
}

export default Polls