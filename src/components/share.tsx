import { TwitterShareButton } from "react-share";
import { useAppSelector } from "../state/hooks";

const Share = () => {
  const myRanking = useAppSelector((state) => state.leaderboardState.myRank);
  const totalPoint = useAppSelector(
    (state) => state.credpointsState.totalPoint
  );
  const shareText = `Hey check out Cred! I’m ranked ${myRanking}th with ${totalPoint.toLocaleString()} CRED points!\nWhat’s your score?\nCheck it out on \n`;

  console.log(window.location.href)
  console.log(window.location.origin)
  return (
    <>
      <TwitterShareButton
        url={`${window.location.origin}`}
        title={shareText}
      >
        <div className="min-w-[50px] px-6 py-3 md:p-4 flex justify-center gap-1 items-center border border-gray-light-1 hover:border-white rounded-full cursor-pointer">
          <img src="/share.svg" alt="share" className="-ml-2 md:ml-0 w-6 h-6 md:w-8 md:h-8" />
          <p className="md:hidden text-sm">Share</p>
        </div>
      </TwitterShareButton>
    </>
  );
};

export default Share;
