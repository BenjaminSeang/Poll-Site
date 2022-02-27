import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    border: none;
    padding: 0.4em 0.7em;
    border-radius: 6px;
    background-color: ${ props => props.color };
`

const yellow = "#FFE700";


const Button = (props) => {

    return(

        <div>
            <ButtonStyle 
                onClick={props.action}
                color={props.color}
                style={props.style}
            >
                {props.buttonText}

            </ButtonStyle >
        </div>
    )
}

export default Button 