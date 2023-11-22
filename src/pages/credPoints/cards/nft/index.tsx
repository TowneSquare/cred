import { useEffect, useState } from "react";
import { useAppSelector } from "../../../../state/hooks";
import { getMetadata } from "../../../../api/metadata";
import { getImageURL } from "../../../../util/url";

const LongestNft = () => {
  const isLive = useAppSelector((state) => state.credpointsState.isLive);
  const nfts = useAppSelector((state) => state.credpointsState.nfts);
  const longest= nfts.length > 0 ? nfts[0] : undefined;

  const [isLoading, toggleLoading] = useState(true);
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

  function onLoad() {
    toggleLoading(false);
  }

  return (
    <div className="container w-[260px] md:w-[320px] min-h-[140px] px-4 pt-4 flex flex-col items-center border border-gray-light-2 rounded-xl">
      {isLive ? (
        <>
          <div className="flex items-center gap-2">
            <img
              src="/credpoints/longestNft.svg"
              width={48}
              height={48}
              alt="ad-img"
              style={{ display: isLoading ? "block" : "none" }}
            />
            <img
              src={imageLink}
              width={48}
              height={48}
              className="rounded-md"
              alt="nft"
              loading="lazy"
              onLoad={onLoad}
              style={{ display: isLoading ? "none" : "block" }}
            />
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
            Here we’ll show what’s the NFT you’re hodling for the longest period
            of time
          </p>
        </>
      )}
    </div>
  );
};

export default LongestNft;
