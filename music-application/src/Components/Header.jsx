import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { uiActions } from "../store/index";
import RegistrationModal from "./RegistrationModal";

import menuIcon from "../assets/menu.png";
import userIcon from "../assets/user.png";
export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();
  const regModal = useRef();

  function handleSidebar() {
    dispatch(uiActions.sideBar());
  }
  function registration() {
    regModal.current.open();
  }
  function account() {}
  return (
    <>
      <header className="header">
        <button onClick={handleSidebar} className="button">
          <img className="icon" src={menuIcon} />
        </button>
        <button className="companyButton">
          SONG<span className="sphere">SPHERE</span>
        </button>
        <button onClick={isAuth ? account : registration} className="button">
          {isAuth ? <img className="icon" src={userIcon} /> : "Registration"}
        </button>
      </header>
      <RegistrationModal ref={regModal} />
    </>
  );
}
