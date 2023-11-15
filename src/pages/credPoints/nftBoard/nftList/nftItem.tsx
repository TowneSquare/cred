import { NftType } from "../../../../type/nftType";

interface Props {
  data: NftType;
}

const NftItem: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="w-20 md:w-[118px] flex flex-col gap-1 items-center">
        <img src={data.url ?? "/credpoints/longestNft.svg"} className="w-full" alt="nft" />
        <p className="text-xs font-bold text-center">{data.nftName}</p>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-sm">{100}</p>
          <img src="/credpoints/cred.svg" className="w-4 h-4" alt="cred" />
        </div>
      </div>
    </>
  );
};

export default NftItem;
