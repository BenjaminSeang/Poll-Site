import React from 'react';
import styled from 'styled-components';

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

    return(

        <UserPollsContainer >
            <UserPollsTitle>Live Polls</UserPollsTitle>
            <div>
                <UserPollLink>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed?</UserPollLink>
                <UserPollLink>Lorem ipsum dolor sit amet, consectetur adipiscing, do?</UserPollLink>
                <UserPollLink>Lorem ipsum dolor sit amet, consectetur adipiscing, sed do?</UserPollLink>
                <UserPollLinkClicked>How good is McDonald's</UserPollLinkClicked>
                <UserPollLink>Lorem ipsum dolor sit amet, adipiscing elit, sed do?</UserPollLink>
                <UserPollLink>Lorem ipsum dolor, consectetur adipiscing elit, sed do?</UserPollLink>
            </div>
        </UserPollsContainer>
    )
}

export default UserPolls