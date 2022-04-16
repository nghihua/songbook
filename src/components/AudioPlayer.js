import React, { useState, useEffect } from 'react';

import ReactAudioPlayer from 'react-audio-player';

import { Row, Col, Image, Card, Button } from 'react-bootstrap';

import { useGlobalContext } from '../context/GlobalContext';

export default function AudioPlayer() {

    const { song } = useGlobalContext();

	return (
    <div 
      className="container-fluid text-center text-md-left fixed-bottom pt-md-2"
      style={{background: "rgba(240, 240, 240, 0.8)"}}
    >
        <div className="row">
            <div className="col-md-4 mt-2">
                <p><span><strong>{song.title}</strong></span> - {song.artist}</p>
            </div>

            <div className="col-md-8 d-flex mb-1">
                <audio controls loop controlsList="nodownload" className="w-100">
                  <source src={song.link} type="audio/mp3"/>
                Your browser does not support the audio element.
                </audio>
            </div>

        </div>
    </div>
	)
}