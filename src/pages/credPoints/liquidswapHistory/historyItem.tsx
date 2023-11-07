import { LiquidswapHistoryType } from "../../../type/liquidswapHistoryType";

interface Props {
  data: LiquidswapHistoryType;
}

const HistoryItem: React.FC<Props> = ({ data }) => {
  return (
    <>
    <div className="py-6 flex justify-between">
      <p className="text-xs text-gray-light-1">{data.createdAt}</p>
      <p className="text-sm">{data.type}</p>
      <div className="flex">
        <p className="text-sm text-gray-light-1">@</p>
        <img src="/credpoints/liquidSwap.svg" className="w-4 h-4" alt="swap" />
        <p className="text-sm text-gray-light-1">Liquidswap</p>
      </div>
      <div className="flex gap-2 justify-items-end">
        <p className="text-sm">{data.volume}</p>
        <img src="/credpoints/cred.svg" className="w-4 h-4" alt="cred" />
      </div>
    </div>
    <div className="w-full h-px border border-gray-light-1" />
    </>
  );
};

export default HistoryItem;
