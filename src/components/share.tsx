import { TwitterShareButton } from "react-share";
import { useAppSelector } from "../state/hooks";

const Share = () => {
  const myRanking = useAppSelector((state) => state.leaderboardState.myRank);
  const totalPoint = useAppSelector(
    (state) => state.credpointsState.totalPoint
  );
  const shareText = `Hey check out Cred! I’m ranked ${myRanking}th with ${totalPoint.toLocaleString()} CRED points! 
  What’s your score? Check it out on `;

  return (
    <>
      <TwitterShareButton
        url={`${window.location.origin}/twitter`}
        title={shareText}
      >
        <div className="p-4 flex justify-center items-center border border-gray-light-1 hover:border-white rounded-full cursor-pointer">
          <img src="/share.svg" alt="share" className="w-4 md:w-8" />
        </div>
      </TwitterShareButton>
    </>
  );
};

export default Share;
