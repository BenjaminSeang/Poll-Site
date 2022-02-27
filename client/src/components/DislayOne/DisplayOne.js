import React from 'react';
import styled from 'styled-components'
import Button from '../Button/Button';

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

const DisplayOne = (props) => {

    const submitHandler = () => {

    }
    return(
        <div style={{marginLeft: '4em', marginBottom: "2em"}}>

            <VoteCardContainer>
                <VoteCardTitle>How good is McDonald's?</VoteCardTitle>
                <div style={{marginBottom: "3em", marginTop: "3em", color: "white"}}>
                    <div>Delicious</div>
                    <div> Good </div>
                    <div> Somewhat good</div>
                    <div>Not good</div>
                    <div>Digusting</div>
                </div>
                
                <Button 
                        buttonText={"Submit"}
                        action={submitHandler}
                        color={"#FFE700"}
                        />
            </VoteCardContainer>

            <VoteCardSubTitle>Subtitle</VoteCardSubTitle>
        </div>
    )
}

export default DisplayOne