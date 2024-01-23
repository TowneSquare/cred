import { useNavigate } from "react-router-dom";
import { getBoringAvatar } from "../../../util/boringAvatar";
import { TwitterList } from "../../../type/twitterList";

interface Props {
  data: TwitterList;
  index: number;
}

const ConnectionItem: React.FC<Props> = ({ data, index }) => {
  const navigate = useNavigate();

  function formatRelativeTime(dateString: Date) {
    const currentDate = new Date();
    const inputDate = new Date(dateString);

    const timeDifference = currentDate.getTime() - inputDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds}s ago`;
    } else if (minutes < 60) {
      return `${minutes}m ago`;
    } else if (hours < 24) {
      return `${hours}h ago`;
    } else {
      return `${days}d ago`;
    }
  }

  return (
    <>
      <div
        className={`px-4 md:px-6 py-4 md:py-6 flex justify-between ${index % 2 == 1 ? "bg-[#FFFFFF0D]" : ""
          } hover:bg-gray-light-1 ${index == 0 && 'hover:rounded-[17px]'}`}
      >
        <div className="flex gap-2">
          <div className={`hidden md:flex w-[70px] justify-center items-center rounded-md`}>
            <p className="text-[14px] text-gray-light-5">
              {formatRelativeTime(data.twitterConnectDate)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={data.avatar}
              className="w-8 h-8 rounded-full"
              alt="avatar"
            />
            <p className="md:block text-base md:text-lg">
              {data.twitterId}
            </p>
            <img
              src="/credpoints/external_link.svg"
              className="hidden group-hover:block w-[16px] h-[16px]"
              alt="cred"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-base md:text-lg">
            +50
          </p>
          <img
            src="/credpoints/cred.svg"
            className="w-6 h-6 md:w-8 md:h-8"
            alt="cred"
          />
        </div>
      </div>
      <div className="w-full h-px" />
    </>
  );
};

export default ConnectionItem;
