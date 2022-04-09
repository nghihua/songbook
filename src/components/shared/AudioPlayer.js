import React, { useState, useEffect } from 'react';
import moment from 'moment';

import './AudioPlayer.css';

export default function AudioPlayer() {

  const [songPaused, setSongPaused] = useState(true);
  const [timeElapsed, setTimeElapsed] = useState(1000);
  const [songName, setSongName] = useState("Song Name");
  const [artistName, setArtistName] = useState("Artist Name");
  //const showPlay = songPaused ? 'fa fa-play-circle-o play-btn' : 'fa fa-pause-circle-o pause-btn';
  const showPlay = 'fa fa-play-circle-o play-btn';

	return (
		<div className="wrapper">
      <div className="card player">
        <div className="z-depth-1 close"><i className="material-icons">close</i></div>
        <div className="image">
          <div className="bottom-content">
            <div className="repeat"><i className="material-icons">repeat</i></div>
            <div className="title">
              <h6 className="song-name">Someone</h6><span className="artist-name">Hozier</span></div>
            <div className="shuffle"><i className="material-icons">shuffle</i></div>
          </div>
        </div>
        <div className="controls">
          <div className="player-controls_btn player-controls__btn_add" id="player-controls__btn_add"><i className="material-icons">add</i></div>

          <div className="player-controls_btn player-controls__btn_prev" id="player-controls__btn_prev"><i className="material-icons">skip_previous</i></div>
          <div className="player-controls_btn player-controls__btn_play"><i className="material-icons">play_arrow</i></div>
          <div className="player-controls_btn  player-controls__btn_next  player-controls__btn_disabled" title=""><i className="material-icons">skip_next</i></div>
          <div className="player-controls_btn  player-controls__btn_share" title=""><i className="material-icons">share</i></div>
        </div>
        <div className="next-song">
          <div className="cover"></div>
          <div className="title">
            <span className="next-title">
              Далі
            </span>
            <br /> Silver Moon
          </div>
          <div className="playlist"><i className="material-icons">queue_music</i></div>
        </div>
      </div>
    </div>
	)
}