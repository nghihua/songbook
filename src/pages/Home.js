import React from "react";

import { Row, Col, Image, Card, Button } from "react-bootstrap";

import "../styles/Home.css";

import { NavLink } from "react-router-dom";
import fakeSongs from "../consts/fakeSongs";

export default function Home() {
  const songs = fakeSongs;
  return (
    <>
      <Image src={require("../assets/hero.jpg")} className="home-hero"></Image>

      <Card>
        <Card.Header as="h5" className="text-center">
          List of Songs
        </Card.Header>
        <Card.Body>
          <Row xs={1} md={3} className="g-4">
            {songs &&
              songs.map((song) => (
                <Col key={song.key}>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={require("../assets/song.jpg")}
                    />
                    <Card.Body>
                      <NavLink to={`/song/${song.key}`} className="link">
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
              ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
