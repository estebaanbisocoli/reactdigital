import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container'
import {Card, CardImage, CardData} from './components/Card/index'
import man from './images/img-profile-man.jpg'
import woman from './images/img-profile-girl.jpg'
const personList =[
  {
  name:'Exar Kun',
  content:`A Jedi's strength flows from the Force. But beware of the dark side. Anger...fear...aggression. The dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan's apprentice. Vader. Is the dark side stronger? No...no...no. Quicker, easier, more seductive.
  But how am I to know the good side from the bad? You will know. When you are
  calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never
  for attack. But tell me why I can't... No, no, there is no why. Nothing more will
  I teach you today. Clear your mind of questions. Mmm. Mmmmmm.`
  },
  {
  name:'Captain Gilad Pellaeon',
  image:'images/img-profile-man.jpg',
  content:`This ground sure feels strange. It doesn't feel like rock at all.
  There's an awful lot of moisture in here. I don't know. I have a bad feeling
  about this. Yeah. Watch out! Yeah, that's what I thought. Mynock. Chewie, check
  the rest of the ship, make sure there aren't any more attached. They're chewing
  on the power cables. Mynocks? Go on inside. We'll clean them off if there are any
  more. Ohhh! Go away! Go away! Beastly thing. Shoo! Shoo! Wait a minute... All
  right, Chewie, let's get out of here!`
  },
  {
  name: 'Kyp Durron',
  image: 'images/img-profile-girl.jpg',
  content: `Yes, Artoo. I was just coming to that. What's going on? I don't know.
  Wonderful! We are now a part of the tribe. Just what I always wanted. Well,
  short help is better than no help at all, Chewie. Thank you. Okay. He says the
  scouts are going to show us the quickest way to the shield generator. Good. How
  far is it? Ask him. We need some fresh supplies, too. And try and get our
  weapons back. And hurry up, will ya? I haven't got all day.`
  },
  {
  name:'Max Rebo',
  image:'images/img-profile-man.jpg'
  },
   ]
const noDescription = "You got a real attitude problem, McFly. You're a slacker. You remind me of you father when he went her, he was a slacker too. My insurance, it's your car, your insurance should pay for it. Hey, I wanna know who's gonna pay for this? I spilled beer all over it when that car smashed into me. Who's gonna pay my cleaning bill? Get your meat hooks off of me. Please note that Einstein's clock is in complete synchronization with my control watch. Jesus, you smoke too?​"
const mapCallback = (person) => (
  <Card>
    <CardImage image={person.image ? (person.image === 'images/img-profile-man.jpg' ? man : woman) : null}/>
    <CardData h2={person.name} p={person.content}>
      
    </CardData>
  </Card>
)
class App extends Component {
  render() {
    return (
      <Container>
        {personList.map(mapCallback)}
      </Container>
    );
  }
}

export default App;
