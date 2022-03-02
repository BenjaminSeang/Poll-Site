import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

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

const AllPolls = (props) => {

    const [pollList, setPollList] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/allPolls")
            .then((res) => {
                console.log(res.data)
                setPollList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    
    return(
        <div>
            {
                pollList.map((poll, index) => (
                    <div key={index}>
                        <Link to={`/deatil/${poll._id}`}>
                            {poll.pollQuestion}
                        </Link>   
                    </div>
                ))
            }
        </div>
    )
}

export default AllPolls