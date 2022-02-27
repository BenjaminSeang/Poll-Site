import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const SelectedPoll = (props) =>
{
    const {pollid} = props;
    const [selectedPoll, setSelectedPoll] = useState({});

    useEffect( () =>
    {
        axios.get(`http://localhost:8000/api/polls/${pollid}`)
            .then( (response) => 
            {
                console.log(response.data);
                setSelectedPoll(response.data);
            })
            .catch ( (error) => 
            {
                console.log(error);
                
            })
    }, [])

    console.log(selectedPoll.options);

    return (
        <div>
            <h3>Selected Poll</h3>
                <div>
                    <p>
                        {
                            selectedPoll.pollQuestion
                        }
                    </p>
                    <div>
                        {/* {
                            selectedPoll.options.map( (option, index) =>
                            (
                                <div>
                                    <input 
                                        type="radio"
                                        name="vote" 
                                        value={option.option} 
                                        key={index}/>
                                    <label htmlFor="vote">
                                        {option.option}
                                    </label>
                                </div>
                            ))
                        } */}
                    </div>
                </div>
            <Link to={"/create"}>Create a Poll</Link>
        </div>
    );
}

export default SelectedPoll;