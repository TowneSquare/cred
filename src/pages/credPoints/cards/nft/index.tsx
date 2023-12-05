import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../state/hooks";
import { getMetadata } from "../../../../api/metadata";
import { getImageURL } from "../../../../util/url";
import LoadingState from "../../../../components/loadingstate";
import LoadingImage from "../../../../components/loadingImage";

const LongestNft = () => {
  const isLive = useAppSelector(state => state.credpointsState.isLive);
  const nfts = useAppSelector((state) => state.credpointsState.nfts);
  const longest= nfts.length > 0 ? nfts[0] : undefined;

  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getImage = async () => {
      if (!longest) return;
      try {
        const res = await getMetadata(longest);
        setImageLink(getImageURL(res.image));
      } catch (e) {}
    };
    getImage();
  }, [longest]);

  return (
    <>
    {!isLive ? (
      <div className="container w-[260px] md:w-[320px] min-h-[140px] px-10 md:px-20 py-4 flex flex-col gap-4 justify-center items-center border border-gray-light-2 rounded-xl">
        <div className="w-full h-9 flex gap-4">
          <LoadingState className="w-1/3" />
          <LoadingState className="w-full" />
        </div>
        <LoadingState className="w-full h-9" />
      </div>
    ) : (
    <div className="container w-[260px] md:w-[320px] min-h-[140px] px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl">
      {longest ? (
        <>
          <div className="flex items-center gap-2">
            <LoadingImage url={imageLink} width={48} height={48} />
            <p className="text-xl md:text-2xl font-bold">{longest?.nftName}</p>
          </div>
          <p className="mt-4 text-center text-sm md:text-base">
            is your longest-holding NFT
          </p>
        </>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <p className="text-xl md:text-2xl font-bold whitespace-nowrap">
              Longest holding NFT
            </p>
          </div>
          <p className="mt-4 text-center text-xs md:text-sm">
            Here we’ll show what’s the NFT you’re holding for the longest period
            of time
          </p>
        </>
      )}
    </div>
    )}
    </>
  );
};

export default LongestNft;
