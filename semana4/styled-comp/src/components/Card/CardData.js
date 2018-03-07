import React from 'react';
import styled from 'styled-components'
const def = "You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. My insurance, it's your car, your insurance should pay for it. Hey, I wanna know who's gonna pay for this? I spilled beer all over it when that car smashed into me. Who's gonna pay my cleaning bill? Get your meat hooks off of me. Please note that Einstein's clock is in complete synchronization with my control watch. Jesus, you smoke too?​"
const CardDataStyled = styled.div`
    h2 {
        font-size: 2.8em;
    }
    p {
	    font-size: 1.4em;
	    line-height: 1.4;
    }
    a {
	    color: #FFFFFF;
	    font-size: 1.3em;
	    padding: 10px 20px;
	    background-color: #c7c7c7;
    }
    @media (min-width: 900px) {
		width: 65%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
        h2 {
		    margin-top: 0;
	    }

	    a {
		    max-width: 100px;
		    text-align: center;
	    }
    }
`
const CardData = ({h2, p}) => {
    return (
        <CardDataStyled>
            <h2>{h2}</h2>
            <p>{p}</p>
            {h2 && p ? (<a href="#">Ver más</a>) : ''}
        </CardDataStyled>
    );
};

export default CardData;