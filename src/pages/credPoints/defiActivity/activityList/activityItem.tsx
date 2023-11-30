import { DefiIcon, DefiLink, DefiName } from "../../../../constants/defi";
import { DefiActivityType } from "../../../../type/defiActivityType";
import moment from "moment";

interface Props {
  data: DefiActivityType;
}

const ActivityItem: React.FC<Props> = ({ data }) => {
  return (
    <a href={DefiLink[data.defiName.toLowerCase()]} target="_blank" className=" cursor-pointer">
      <div className="group py-6 px-2 md:px-8 flex justify-between hover:bg-gray-light-1"
      >
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-light-5">
            {moment(data.updatedAt).format("MMM DD YYYY")}
          </p>
          <p className="text-sm">{data.coin.toUpperCase()}</p>
          <div className="flex gap-1 items-center">
            <p className="text-sm text-gray-light-5">@</p>
            <img
              src={DefiIcon[data.defiName.toLowerCase()]}
              className="w-[22px] h-[22px]"
              alt="swap"
            />
            <p className="text-sm text-gray-light-5">
              {DefiName[data.defiName.toLowerCase()]}
            </p>
          </div>
          <img src="/credpoints/external_link.svg" className="hidden group-hover:block w-[16px] h-[16px]" alt="cred" />
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">{data.point}</p>
          <img src="/credpoints/cred.svg" className="w-[22px] h-[22px]" alt="cred" />
        </div>
      </div>
      <div className="h-px border border-gray-light-1" />
    </a>
  );
};

export default ActivityItem;
