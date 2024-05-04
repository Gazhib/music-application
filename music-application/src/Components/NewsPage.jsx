import { Fade } from "react-awesome-reveal";
import picture1 from "../assets/dummy_pictures/music1.webp";
import picture3 from "../assets/dummy_pictures/music3.webp";
import picture4 from "../assets/dummy_pictures/music4.webp";
import picture5 from "../assets/dummy_pictures/music5.webp";
const dummy_data = [
  {
    title:
      "5 Things to Watch Out for at Eurovision 2024, According to the Song Contest’s Executive Supervisor",
    picture: picture1,
    link: "https://www.billboard.com/music/music-news/eurovision-2024-song-contest-martin-osterdahl-1235673276/",
  },

  {
    title:
      "Bruce Sudano, Donna Summer’s Widower, on Ye Sampling ‘I Feel Love’: ‘Kanye Is a Great Artist, But Wrong Is Still Wrong’",
    picture: picture3,
    link: "https://www.billboard.com/music/music-news/bruce-sudano-donna-summer-new-album-1235671293/",
  },
  {
    title:
      "Britney Spears Explains How She Twisted Her Ankle & Shows Off Swollen Foot After Hotel Incident",
    picture: picture4,
    link: "https://www.billboard.com/music/music-news/britney-spears-how-twisted-ankle-swollen-foot-1235672976/",
  },
  {
    title:
      "Dua Lipa Explains Why ‘Radical Optimism’ Is Her Most ‘Personal’ Album Yet: Watch",
    picture: picture5,
    link: "https://www.billboard.com/music/music-news/dua-lipa-radical-optimism-vulnerability-interview-1235672912/",
  },
];
export default function NewsPage() {
  return (
    <div className="NewsPage">
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
