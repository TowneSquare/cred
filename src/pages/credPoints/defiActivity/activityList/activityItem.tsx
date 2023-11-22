import { DefiActivityType } from "../../../../type/defiActivityType";
import moment from "moment";

interface Props {
  data: DefiActivityType;
}

const ActivityItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="py-6 flex justify-between">
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
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-bold">{data.point}</p>
          <img src="/credpoints/cred.svg" className="w-[22px] h-[22px]" alt="cred" />
        </div>
      </div>
      <div className="w-full h-px border border-gray-light-1" />
    </>
  );
};

export default ActivityItem;

const DefiIcon:{ [key: string]: string } = {
  "pontem": "/credpoints/liquidSwap.svg",
  "pancake": "/credpoints/pancakeswap.png",
  "thala": "/credpoints/thala.svg",
  "aries": "/credpoints/aries.png"
}

const DefiName:{ [key: string]: string } = {
  "pontem": "Liquidswap",
  "pancake": "Pancakeswap",
  "thala": "Thala",
  "aries": "Aries Market"
}