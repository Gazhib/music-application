/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";

export default function CustomAudio({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [time, setTime] = useState(0);
  const duration = "0:29";
  const intervalId = useRef(null);

  function playPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        clearInterval(intervalId.current);
      } else {
        audioRef.current.play();
        intervalId.current = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  }

  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const formattedTime = `0:${time >= 10 ? time : `0${time}`}`;

  return (
    <div className="audioPlayer">
      <div className="custom-audio-player">
        <button className="play-pause" onClick={playPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <input type="range" className="seek-bar" value={time} max={29} readOnly />
        <span className="current-time">{formattedTime}</span> /{" "}
        <span className="duration">{duration}</span>
        <audio ref={audioRef} className="audio" src={audioUrl}></audio>
      </div>
    </div>
  );
}
