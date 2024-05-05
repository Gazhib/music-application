/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from "react";
import pauseIcon from "../assets/icons/pause.png";
import playIcon from "../assets/icons/play.png";
export default function CustomAudio({ audioUrl }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);
  const [duration, setDuration] = useState(29);
  function playPause() {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);

      if (isPlaying) {
        audioRef.current.pause();
        clearInterval(intervalId.current);
      } else {
        audioRef.current.play();
        intervalId.current = setInterval(() => {
          setTime((prevTime) => prevTime + 0.01);
        }, 10);
      }
      setIsPlaying(!isPlaying);
    }
  }
  if (time >= duration) {
    setIsPlaying(false);
    audioRef.current.pause();
    clearInterval(intervalId.current);
    setTime(0);
  }
  useEffect(() => {
    return () => clearInterval(intervalId.current);
  }, []);

  const formattedTime = `0:${
    time >= 10 ? Math.floor(time) : `0${Math.floor(time)}`
  }`;

  return (
    <div className="audioPlayer">
      <div className="custom-audio-player">
        <button className="play-pause" onClick={playPause}>
          {isPlaying ? (
            <img className="play-pause-icon" src={pauseIcon} />
          ) : (
            <img className="play-pause-icon" src={playIcon} />
          )}
        </button>
        <input
          type="range"
          className="seek-bar"
          value={time}
          max={duration}
          readOnly
        />
        <span className="current-time">{formattedTime}</span> /{" "}
        <span className="duration">{`0:${Math.floor(duration)}`}</span>
        <audio ref={audioRef} className="audio" src={audioUrl}></audio>
      </div>
    </div>
  );
}
