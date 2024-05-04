import { useSelector } from "react-redux";
import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png"
export default function Sidebar() {
  const isOpen = useSelector((state) => state.ui.sideBar);
  return (
    <aside className={`Sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <div className="button-container">
          <button className="button SidebarButton">
            <img className="icon" src={homeIcon} />
            <p>Home</p>
          </button>
          <button className="button SidebarButton">
            <img className="icon" src={searchIcon} />
            <p>Search</p>
          </button>
        </div>
      </div>
    </aside>
  );
}
