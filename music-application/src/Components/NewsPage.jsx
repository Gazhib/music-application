import { Fade } from "react-awesome-reveal";

import {useSelector} from "react-redux";
const dummy_data = []
export default function NewsPage() {
  const isSideBar = useSelector((state) => state.ui.sideBar);
  return (
    <div className={`NewsPage ${isSideBar ? "side" : ""}`}>
      <Fade>
        <ul className="news">
          {dummy_data.map((data) => {
            return (
              <li key={data.title}>
                <a href={data.link}>
                  <img src={data.picture} />
                </a>
                <a href={data.link}>
                  <p>{data.title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </Fade>
    </div>
  );
}
