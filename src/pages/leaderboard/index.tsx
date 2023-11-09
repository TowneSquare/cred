import Header from "../../components/header"
import PrivacyPolicy from "../../components/privacyPolicy";
import Cards from "./cards";
import MyRanking from "./myRanking";
import UserList from "./userList";

const Leaderboard = () => {
  return (
    <div>
      <Header />
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[700px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
          <MyRanking />
          <Cards />
          <UserList />
          <PrivacyPolicy />
        </div>
      </div>
    </div>
  )
}

export default Leaderboard;