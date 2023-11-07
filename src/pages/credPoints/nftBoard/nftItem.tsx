import { NftType } from "../../../type/nftType";

interface Props {
  data: NftType;
}

const NftItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-[118px] flex flex-col items-center">
        <img src={data.url} className="w-full" alt="nft" />
        <p className="text-xs font-bold text-center">{data.name}</p>
        <div className="flex gap-2 justify-items-end">
          <p className="text-sm">{data.price}</p>
          <img src="/credpoints/cred.svg" className="w-4 h-4" alt="cred" />
        </div>
      </div>
    </>
  );
};

export default NftItem;
