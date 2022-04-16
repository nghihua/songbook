import React from 'react';

import { Row, Col, Image, Card, Button } from 'react-bootstrap';

import '../styles/Home.css';

import { NavLink } from "react-router-dom";

const songs = [
	{id: 1, title: "Your Firefly", artist:"AirDice", lyrics: `When the sun comes, you're my shade
When the moon comes, you're a little firefly
I love you more than I can say
No I'll never fly away
When the sun comes, you're my shade
When the moon comes, you're a little firefly
I love you more than I can say
I'm your firefly, I'm your shade
I wanna live in a house that we've made
I wanna love you everyday
And I'll never fly away
I wanna love you everyday`},
	{id: 2, title: "She", artist:"Elvis Costello", lyrics: "She may be the face I can't forget. A trace of pleasure or regret..."},
	{id: 3, title: "ily", artist: "Surf Mesa", lyrics: "I love you, baby, and if it's quite all right. I need you I need you I need you I need you I need you I need you I need you I need you I need you I need you I need you I need you, baby, to warm these lonely nights..."},
	{id: 4, title: "House of Gold", artist: "Twenty One Pilots", lyrics: "She asked me, Son, when I grow old. Will you buy me a house of gold?..."},
]

export default function Home() {
	return (
		<>
			<Image
				src={require('../assets/hero.jpg')}
				className="home-hero">
			</Image>

			<Card>
			  <Card.Header as="h5" className="text-center">List of Songs</Card.Header>
			  <Card.Body>
			  	<Row xs={1} md={3} className="g-4">
				    {
				    	songs &&
				    	songs.map((song) => 
				    		<Col key={song.id}>

				    		
						    <Card>
						        <Card.Img variant="top" src={require('../assets/song.jpg')} />
						        <Card.Body>
						        	<NavLink to="/song" className="link">
						        		<Card.Title>{song.title}</Card.Title>
						        	</NavLink>
						        	<small className="blockquote-footer">
							        	<cite title={song.artist}>{song.artist}</cite>
							    	</small>
						        	<Card.Text className="home-lyrics">
						            	{song.lyrics}
						        	</Card.Text>
						        </Card.Body>
						    </Card>
						    

						    </Col>
				    	)
				    }
			    </Row>
				 
			  </Card.Body>
			</Card>
		</>
	)
}