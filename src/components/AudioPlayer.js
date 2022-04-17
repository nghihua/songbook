import React, { useState, useEffect, useRef } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { Row, Col, Image, Card, Button } from 'react-bootstrap';

import { useGlobalContext } from '../context/GlobalContext';

export default function AudioPlayer() {

    const audioRef = useRef(null);

    const { track } = useGlobalContext();

    useEffect(() => {
        return async () => {
            if (audioRef.current){
                audioRef.current.load();
            }
        }
    }, [track]);

	return (
    <div 
      className="container-fluid text-center text-md-left fixed-bottom pt-md-2"
      style={{background: "rgba(255, 255, 255, 0.8)"}}
    >
        <div className="row">
            <div className="col-md-4 mt-2">
                <p><span><strong>{track.title}</strong></span> - {track.artist}</p>
            </div>

            <div className="col-md-8 d-flex mb-1">
                <audio ref={audioRef} controls loop controlsList="nodownload" autoPlay className="w-100">
                  <source src={track.link} type="audio/mp3"/>
                Your browser does not support the audio element.
                </audio>
            </div>

        </div>
    </div>
	)
}