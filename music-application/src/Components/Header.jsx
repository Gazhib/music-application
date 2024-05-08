/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { uiActions, authActions, pageActions } from "../store/index";

import logoutIcon from "../assets/icons/logout.png";
import menuIcon from "../assets/icons/menu.png";
import userIcon from "../assets/icons/user.png";

export default function Header({ registration }) {
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  function handleSidebar() {
    dispatch(uiActions.sideBar());
  }

  function handleHome() {
    dispatch(pageActions.changePage("home"));
  }

  function handleLogOut() {
    dispatch(authActions.changeAuth());
  }
  return (
    <div>
      <header className="header">
        <button onClick={handleSidebar} className="button">
          <img className="icon" src={menuIcon} />
        </button>
        <button onClick={handleHome} className="companyButton">
          SONG<span className="sphere">SPHERE</span>
        </button>
        {isAuth ? (
          <div className="dropdown">
            <button className="button">
              <img className="icon" src={userIcon} />
            </button>
            <div className="menu">
              <button className="menuButtons" onClick={handleLogOut}>
                <img className="logoutIcon" src={logoutIcon} />
                <p>Log out</p>
              </button>

            </div>
          </div>
        ) : (
          <button onClick={registration} className="button">
            Registration <br /> or <br /> Authrorization
          </button>
        )}
      </header>
    </div>
  );
}
