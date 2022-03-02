import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from "react-router-dom";

const UserPollsContainer = styled.div`
    margin-right: 5em;
    margin-left: 3em;
    margin-bottom: 2em;
    padding-bottom: 3em;
`

const UserPollsTitle = styled.h2`
    color: #555358;
    font-size: 4em;
    display: flex;
    justify-content: flex-end;
`
const UserPollLink = styled.p`
    color: #000000;
    margin-bottom: 1em;
    display: flex;

`

const UserPollLinkClicked = styled.p`
    color: #555358;
    margin-bottom: 1em;
    font-weight: bolder;
`
const UserPolls = (props) => {

    const [user, setUser] = useState({});
    const [pollList, setPollList] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/users/secure",
            { withCredentials: true }
        )
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[])
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/polls/allpollsbycreator/${username}`,
            {withCredentials: true}
        )
            .then((res) => {
                console.log(res.data)
                setPollList(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const deleteHandler = (pollid) =>{
        axios.delete(`http://localhost:8000/api/polls/${pollid}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPollList(pollList.filter((poll, index) => poll._id !== pollid))
            })
            .catch((err) => console.log(err))
    }

    return(

        <UserPollsContainer >
            <div>
                <p>Welcome {user.username}</p>
                <p>Here are the polls initiated by you:</p>
                {
                    pollList.map((poll, index) =>(
                        <div key={index}>
                            <Link to={`/deatil/${poll._id}`}>
                                {poll.pollQuestion}
                            </Link>  
                            <button onClick={() => deleteHandler(poll._id)}>
                                Delete
                            </button>
                        </div>
                    ))
                }
            </div>
        </UserPollsContainer>
    )
}

export default UserPolls