import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { apiActions } from "../store";
import APIController from "../../APIwork";
const dummy_data = [];

export default function NewsPage() {
  const isSideBar = useSelector((state) => state.ui.sideBar);
  const [releases, setReleases] = useState([]);
  const dispatch = useDispatch();

  async function getNewReleases(token){
    const getReleases = await APIController.getNewReleases(token)
    console.log(getReleases)
    setReleases(getReleases)
  }

  async function getNewToken(){
    const token = await APIController.getToken()
    dispatch(apiActions.acquireToken(token)) 
    return token
  }

  useEffect(() => {
    async function initialize(){
      const token = await getNewToken()
      getNewReleases(token)
    }
    initialize()
  }, [])

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
