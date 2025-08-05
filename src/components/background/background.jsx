import React, { useRef, useEffect, useState } from 'react';
import './background.css'; 
import { FaPlay, FaPause, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const videoList = [
  '/assets/v1.mp4',
  '/assets/v2.mp4',
  '/assets/v3.mp4',
  '/assets/v4.mp4',
  '/assets/v5.mp4',
  '/assets/v6.mp4',
];

export default function Background() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    setVideoIndex(Math.floor(Math.random() * videoList.length));
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;
    if (isPaused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
    setIsPaused(!isPaused);
  };

  const handleVideoEnded = () => {
    let nextIndex;
    do {
      nextIndex = Math.floor(Math.random() * videoList.length);
    } while (nextIndex === videoIndex);
    setVideoIndex(nextIndex);
  };

  return (
    <div className="background-container">
      <video
        ref={videoRef}
        src={videoList[videoIndex]}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnded}
        className="background-video"
      ></video>

      <div className="overlay-content">
        <h1>Bienvenue sur notre plateforme</h1>
        <Link to="/inscription" className="btn-by">
          <FaUserPlus /> Ouvrir un compte gratuitement
        </Link>
      </div>

      <div className="video-controls">
        <button onClick={togglePlayPause} className="play-pause-btn">
          {isPaused ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
}