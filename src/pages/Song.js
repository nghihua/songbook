import React from 'react';

import { Row, Col, Image, Card, Button } from 'react-bootstrap';

import '../styles/Song.css';

const song = {
	key: 1,
	title: "What It Is",
	lyrics: `So you're standing in the parking lot of life
And you're trying to figure out your fate tonight
And you hear a sound coming out of the car radio
Saying "son, if you don't learn, then you will never know"
So you try to drag your feet down to the bar
When you startin' to forget just who you are
And they told you it was written in the stars
But you've never had a chance to look that far
Yeah, it's just the way it goes
Maybe you die young before you're old
Yeah, it's just the way it is
Nobody's gonna tell you how to live
In a world that changes everyday
It's easy to get lost along the way
In a world that's never as it seems
Where people try to buy and sell their dreams
Where people try to buy and sell their dreams
Yeah, it's just the way it goes
Maybe you die young before you're old
Yeah, it's just the way it is
Nobody's gonna tell you how to live
Nobody's gonna tell you how to live
Nobody's gonna tell you how to live
Nobody's gonna tell you how to live
Cause nobody understands just what it is`
};

export default function Song() {
	return (
		<>

			<Card className="bg-dark text-white">
			  <Card.Img src="https://media.istockphoto.com/photos/sky-in-the-pink-and-blue-colors-effect-of-light-pastel-colored-of-picture-id1061786490?k=20&m=1061786490&s=612x612&w=0&h=YlXFrKAG-V95qWLI_u5kvQ515noO42Xj3CVnq3GgRB8=" className="song-hero" alt="Card image" />
			  <Card.ImgOverlay className="d-flex">
			    <h1 className="align-self-end mx-auto mt-30">{song.title}</h1>
			  </Card.ImgOverlay>
			</Card>

			<Card>
			  <Card.Header as="h5" className="text-center">Lyrics</Card.Header>
			  <Card.Body>
				 <Card.Text className="song-lyrics">{song.lyrics}</Card.Text>
			  </Card.Body>
			</Card>
		</>
	)
}