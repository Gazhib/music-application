/* eslint-disable react/prop-types */

import { useState, useEffect, useRef } from "react";
import userIcon from "../assets/icons/user.png";
import { FetchingComments, FetchingGetComments } from "../fetching";
import { useSelector } from "react-redux";
import RegistrationModal from "./RegistrationModal";
export default function CommentSection({ name }) {
  const regModal = useRef();
  function registration() {
    regModal.current.open();
  }
  const [comments, setComments] = useState([]);
  const commentRef = useRef();
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  useEffect(() => {
    async function fetchComments() {
      const commentsArray = await FetchingGetComments(name);
      setComments(commentsArray);
    }
    fetchComments();
  }, []);

  async function handleComment() {
    const info = { [name]: commentRef.current.value };
    await FetchingComments(info);
    const commentsArray = await FetchingGetComments(name);
    commentsArray.reverse();
    setComments(commentsArray);
  }

  return (
    <div className="CommentSection">
      <input
        ref={commentRef}
        placeholder="Add some comment here..."
        className="commentInput"
        type="text"
      />
      {isAuth ? (
        <button className="submitButton" onClick={handleComment}>
          Leave comment
        </button>
      ) : (
        <button className="submitButton" onClick={registration}>
          Register or sign in to comment
        </button>
      )}
      <div>
        {comments && (
          <ul className="comments">
            {comments.map((comment, index) => {
              return (
                <li key={index}>
                  <img className="userIcon" src={userIcon} />
                  {comment}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <RegistrationModal ref={regModal} />
    </div>
  );
}
