import React from 'react';
import styled from 'styled-components'

const CardStyled = styled.div`
    padding: 15px;
	margin-bottom: 30px;
	border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.7);
    @media (min-width: 600px) {
        width: 45%;
    }
    @media (min-width: 900px) {
        width: 49%;
        display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
    }
`  
const Card = (props) => {
    return (
        <CardStyled>
            {props.children}
        </CardStyled>
    );
};

export default Card;