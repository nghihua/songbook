import React, { useState, useEffect } from "react";

import { Row, Col, Image, Card, Button } from "react-bootstrap";

import "../styles/Song.css";

import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";
import fakeSongs from "../consts/fakeSongs";

export default function Song() {
  const { track, setTitle, setArtist, setLink } = useGlobalContext();

  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useParams();
  const song = fakeSongs[id - 1];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (track.link == song.link) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  }, [track]);

  const playSong = async () => {
    setTitle(song.title);
    setArtist(song.artist);
    setLink(song.link);
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/photos/sky-in-the-pink-and-blue-colors-effect-of-light-pastel-colored-of-picture-id1061786490?k=20&m=1061786490&s=612x612&w=0&h=YlXFrKAG-V95qWLI_u5kvQ515noO42Xj3CVnq3GgRB8=")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: "100px",
        }}
        className="align-self-end container-fluid text-start text-md-left pb-md-4"
      >
        <div className="row">
          <div className="col-md-6 mt-md-0 my-3 d-flex align-items-center justify-content-center">
            <h1 className="text-uppercase">
              {song.title}{" "}
              <span>
                <i
                  role="button"
                  className={`fa-solid ${
                    isPlaying ? "fa-circle-stop" : "fa-circle-play"
                  }`}
                  onClick={playSong}
                ></i>
              </span>
            </h1>
          </div>

          <p
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              fontSize: "20px",
            }}
            className="col-md-6 mb-md-0 mb-5 p-4"
          >
            “ {song.description} ”
          </p>
        </div>
      </div>

      <Card>
        <Card.Header as="h5" className="text-center">
          Lyrics
        </Card.Header>
        <Card.Body>
          <Card.Text className="song-lyrics pb-5">{song.lyrics}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
