import { DefiActivityType } from "../../../../type/defiActivityType";

interface Props {
  data: DefiActivityType;
}

const ActivityItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="py-6 flex justify-between">
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-light-5">
            {new Date(data.updatedAt).toDateString()}
          </p>
          <p className="text-sm">{data.coin.toUpperCase()}</p>
          <div className="flex gap-1 items-center">
            <p className="text-sm text-gray-light-5">@</p>
            <img
              src={DefiIcon[data.defiName.toLowerCase()]}
              className="w-[22px] h-[22px]"
              alt="swap"
            />
            <p className="hidden md:block text-sm text-gray-light-5">
              {data.defiName.toUpperCase()}
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
  "liquidswap": "/credpoints/liquidSwap.svg",
  "pontem": "/credpoints/liquidSwap.svg",
  "pancakeswap": "/credpoints/pancakeswap.png",
  "thala": "/credpoints/thala.svg",
}