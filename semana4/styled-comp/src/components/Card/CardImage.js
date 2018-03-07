import React from 'react';
import styled from 'styled-components'

const CardImageStyled = styled.div`
    img {
	    border-radius: 50%;
	    box-shadow: 0 0 8px #333;
    }
    @media (min-width: 900px) {
        width: 33%
    }
`
const SocialMedia = styled.ul`
    margin-top: 20px;
	display: flex;
    justify-content: space-around;
    align-self: bottom;
    a {
        color: #FFFFFF;
        font-size: 1.6em;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: #508fb8;
    }

`
const CardImage = ({image, alt}) => {
    return (
        <CardImageStyled>
            <img src={image ? image: 'https://vignette.wikia.nocookie.net/yakusokunoneverland/images/3/3c/NoImageAvailable.png/revision/latest?cb=20160910192028'} alt={alt}></img>
            <SocialMedia>
				<li><a href="#"><span className="ion-social-facebook"></span></a></li>
				<li><a href="#"><span className="ion-social-twitter"></span></a></li>
				<li><a href="#"><span className="ion-social-linkedin"></span></a></li>
			</SocialMedia>
        </CardImageStyled>
    );
};

export default CardImage;