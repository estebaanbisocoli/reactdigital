import React from 'react';
import styled from 'styled-components'
const MyContainer = styled.div`
    
	border: solid 1px #c7c7c7;
	padding: 15px;
    margin: 15px;
    
    @media (min-width: 600px) {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
    }
    @media (min-width: 900px) {
		max-width: 1200px;
		margin: 20px auto;
	}
`
const Container = (props) => {
    return (
        <MyContainer>
           {props.children}
        </MyContainer>
    );
};

export default Container;