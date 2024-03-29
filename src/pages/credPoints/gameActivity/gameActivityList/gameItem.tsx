import moment from "moment";
import { GameType } from "../../../../type/gameType";
import { getBoringAvatar } from "../../../../util/boringAvatar";

interface Props {
  data: GameType;
}

const GameItem: React.FC<Props> = ({ data }) => {
  return (
    <a
      target="_blank"
      className=" cursor-pointer"
    >
      <div className="group py-6 px-2 md:px-8 flex justify-between hover:bg-gray-light-1">
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-light-5">
            {moment(data.blockTime).format("MMM DD YYYY")}
          </p>
          <div className="flex gap-1 items-center">
            <img
              src={data.image}
              className="w-5 h-5"
              alt="avatar"
            />
            <p className="text-xs md:text-sm text-gray-light-5 group-hover:text-white">
              {data.nftName}
            </p>
          </div>
          <img
            src="/credpoints/external_link.svg"
            className="hidden group-hover:block w-[16px] h-[16px]"
            alt="cred"
          />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">50</p>
          <img
            src="/credpoints/cred.svg"
            className="w-[22px] h-[22px]"
            alt="cred"
          />
        </div>
      </div>
      <div className="h-px border border-gray-light-1 border-opacity-20" />
    </a>
  );
};

export default GameItem;
