import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Polls from '../components/Polls/Polls';
import SignUp from '../components/SignUp/SignUp';
import DisplayOne from '../components/DislayOne/DisplayOne';

const Home = (props) => {

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