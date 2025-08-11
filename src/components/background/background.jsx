import React, { useRef, useState } from 'react';
import './background.css'; 
import { FaPlay, FaPause, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const videoSrc = '/assets/vid1.mp4';

export default function Background() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isEnded, setIsEnded] = useState(false);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isEnded) {
      // Si la vidéo est finie, recommencer depuis le début et lancer
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPaused(false);
      setIsEnded(false);
    } else if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const handleVideoEnded = () => {
    setIsEnded(true);
    setIsPaused(true);
  };

  return (
    <div className="background-container">
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop={false}
        onEnded={handleVideoEnded}
        className="background-video"
      ></video>

      <div className="overlay-content">
        <h1 className="overlay-content-h1">Votre argent est plus efficace.</h1>
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
