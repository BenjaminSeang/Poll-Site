import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Polls from '../components/Polls/Polls';
import SignUp from '../components/SignUp/SignUp';
import DisplayOne from '../components/DislayOne/DisplayOne';

const Home = (props) => {

    const [user, setUser] = useState({});

    //get logged in user if exists
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

    return(
        <div>
            <Header />
            {/* <hr style={{ border: "none", borderTop: "4px dotted gray"}}/> */}
            <SignUp />
            <div style={{display: "flex", justifyContent:'flex-end', marginTop: "6em", backgroundColor:'#D5E758', paddingTop: "3em"}}>
                <DisplayOne />
                <Polls />
            </div>

        </div>

    )
}

export default Home