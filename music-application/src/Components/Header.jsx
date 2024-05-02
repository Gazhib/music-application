import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/index";
import menuIcon from "../assets/menu.png";
import userIcon from "../assets/user.png";
export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();
  function handleSidebar() {
    dispatch(uiActions.sideBar());
  }
  return (
    <header className="header">
      <button onClick={handleSidebar} className="button">
        <img className="icon" src={menuIcon} />
      </button>
      <button className="companyButton">SONG<span className="sphere">SPHERE</span></button>
      <button className="button">
        {isAuth ? <img className="icon" src={userIcon} /> : "Registration"}
      </button>
    </header>
  );
}
