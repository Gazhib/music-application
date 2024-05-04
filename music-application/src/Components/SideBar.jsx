import { useSelector } from "react-redux";
import homeIcon from "../assets/icons/home.png";
import searchIcon from "../assets/icons/search.png";
import { useDispatch } from "react-redux";
import { pageActions } from "../store";
export default function Sidebar() {
  const isOpen = useSelector((state) => state.ui.sideBar);
  const dispatch = useDispatch();
  function handlePageChange(pageType) {
    dispatch(pageActions.changePage(pageType));
  }
  return (
    <aside className={`Sidebar ${isOpen ? "open" : ""}`}>
      <div className="inner">
        <div className="button-container">
          <button
            onClick={() => handlePageChange("home")}
            className="button SidebarButton"
          >
            <img className="icon" src={homeIcon} />
            <p>Home</p>
          </button>
          <button
            onClick={() => handlePageChange("search")}
            className="button SidebarButton"
          >
            <img className="icon" src={searchIcon} />
            <p>Search</p>
          </button>
        </div>
      </div>
    </aside>
  );
}
