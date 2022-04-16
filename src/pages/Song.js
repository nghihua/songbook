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
Cause nobody understands just what it is`,
	description: `I listened to this song when I was still lost in life. What to do, who to be, it was all a mystery. You are only ever sure of yourself through trials and errors. It's like you're given a randomized character when you enter this game, and only through time can you figure out its quirks. No detailed description for you, and no one can ever tell you what to do, who to be.`
};

export default function Song() {
	return (
		<>
			<div 
				style={{ 
					backgroundImage: 'url("https://media.istockphoto.com/photos/sky-in-the-pink-and-blue-colors-effect-of-light-pastel-colored-of-picture-id1061786490?k=20&m=1061786490&s=612x612&w=0&h=YlXFrKAG-V95qWLI_u5kvQ515noO42Xj3CVnq3GgRB8=")',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					paddingTop: '100px'
				}} 
				className="align-self-end container-fluid text-start text-md-left"
			>
                <div className="row">
                    <div className="col-md-6 mt-md-0 my-3 d-flex align-items-center justify-content-center">
                        <h1 className="text-uppercase">{ song.title }</h1>
                    </div>

                    <cite 
                    	style={{ fontFamily: "'Indie Flower', cursive", fontSize: '25px' }} 
                    	className="col-md-6 mb-md-0 mb-3 px-5">
                        "{ song.description }"
                    </cite>
                </div>
            </div>

			<Card>
			  <Card.Header as="h5" className="text-center">Lyrics</Card.Header>
			  <Card.Body>
				 <Card.Text className="song-lyrics pb-5">{song.lyrics}</Card.Text>
			  </Card.Body>
			</Card>

		</>
	)
}