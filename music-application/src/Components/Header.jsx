import { useSelector } from "react-redux";
import menuIcon from "../assets/menu.png";
import userIcon from "../assets/user.png";
export default function Header() {
  const isAuth = useSelector((state) => state.auth.isAuthorized);
  return (
    <header className="header">
      <button className="button">
        <img className="icon" src={menuIcon} />
      </button>
      <button className="companyButton">SONGSPHERE</button>
      <button className="button">{isAuth ? <img className="icon" src={userIcon} /> : "Registration"}</button>
    </header>
  );
}
