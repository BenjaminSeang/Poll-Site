import React from 'react';
import Header from '../components/Header/Header';
import UserPolls from '../components/UserPolls/UserPolls';

const ManageVote = (props) => {

    return(

        <div>
            <Header />
            <div style={{backgroundColor: ""}}>
                <UserPolls />
            </div>
        </div>
    )
}

export default ManageVote