import { useDispatch } from "react-redux";
import CommentSection from "./CommentSection";
import backIcon from "../assets/icons/back.png";
import testingImage from "../assets/testingImage.jpg";
import { pageActions } from "../store";
import { Fade } from "react-awesome-reveal";
import Rating from "react-rating";
import { useRef } from "react";
export default function TestingPage() {
  const dispatch = useDispatch();
  const ratingRef = useRef();
  const artists = ["Aidyn", "Aslan", "Batyrlan"];
  function normalDate(givenDate) {
    const date = new Date(givenDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  }
  function goBack() {
    dispatch(pageActions.changePage("playlist"));
  }

  function handleRating(rating){
    
  }
  const trackName = "Some track name";
  return (
    <div className="MusicPage">
      <div className="backContainer">
        <div className="coverContainer">
          <Fade>
            <img className="cover" src={testingImage} />
          </Fade>
          <div className="rating">
            <Rating onChange={(value) => handleRating(value)} />
          </div>
        </div>

        <button onClick={goBack} className="backButton music">
          <img className="backIcon" src={backIcon} />
          <span>Back</span>
        </button>
      </div>
      <div className="infoMusic">
        <Fade>
          <h2>{trackName}</h2>
          <h3>
            <span className="artists">Artists: </span>
            {artists.map((artist, index) => {
              return (
                <span key={index}>
                  {artist}
                  {index === artists.length - 1 ? " " : ", "}{" "}
                </span>
              );
            })}
          </h3>
          <h3>
            <span className="artists">Release date: </span>
            {normalDate("2024-12-12")}
          </h3>
        </Fade>
      </div>
      <CommentSection name={trackName} />
    </div>
  );
}
