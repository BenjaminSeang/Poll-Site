import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllPolls = (props) =>
{
    const [pollList, setPollList] = useState([]);

    useEffect( () =>
    {
        axios.get("http://localhost:8000/api/allPolls")
            .then( (response) => 
            {
                console.log(response.data);
                setPollList(response.data);
            })
            .catch ( (error) => 
            {
                console.log(error);
                
            })
    }, [])

    return (
        <div>
            <h3>Live Polls</h3>
                {
                    pollList?
                    // If
                    pollList.map ( (poll, index) => (
                        <Link to={`/poll/${poll._id}`} key={index}>
                            {poll.pollQuestion}
                        </Link>
                    ))

                    // Else
                    :null
                }
        </div>
    );
}

export default AllPolls;