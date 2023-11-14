import Header from "../../components/header";
import PrivacyPolicy from "../../components/privacyPolicy";
import Cards from "./cards";
import MyRanking from "./myRanking";
import RankingList from "./rankingList";
import "./index.css";

const Leaderboard = () => {
  return (
    <div className="parallax">
      <Header />
      <div className="parallax__group">
        <div className="parallax__layer effect1">
          <img src="/leaderboard/effect1.png" alt="effect1" />
        </div>
        <div className="parallax__layer effect2">
          <img src="/leaderboard/effect2.png" alt="effect2" />
        </div>
        <div className="parallax__layer effect3">
          <img src="/leaderboard/effect3.png" alt="effect3" />
        </div>
      </div>
      <div className="relative w-full flex justify-center z-10">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
          <MyRanking />
          <Cards />
          <RankingList />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
