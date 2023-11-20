import { useEffect, useState } from "react";
import { NftType } from "../../../../type/nftType";
import Moralis from "moralis";
import axios from "axios";

interface Props {
  data: NftType;
}

const NftItem: React.FC<Props> = ({ data }) => {
  const [isLoading, toggleLoading] = useState(true);
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getMetadata = async () => {
      try {
        const url = `https://backend.townesquare.xyz/activity/metadata`;
        const strData = JSON.stringify({
          nftName: data.nftName,
          nftCollection: data.nftCollection,
          creator: data.creator,
        });
        const res = await (
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: strData,
          })
        ).json();

        setImageLink(getImageURL(res.image));
      } catch (e) {}
    };
    getMetadata();
  }, []);

  function onLoad() {
    console.log(data, "onLoad");
    setTimeout(() => toggleLoading(false), 1000);
  }

  return (
    <>
      <div className="w-20 md:w-[118px] flex flex-col gap-1 items-center">
        <img
          src="/credpoints/longestNft.svg"
          width={120}
          height={120}
          alt="ad-img"
          style={{ display: isLoading ? "block" : "none" }}
        />
        <img
          src={imageLink}
          width={120}
          height={120}
          className="rounded-md"
          alt="nft"
          loading="lazy"
          onLoad={onLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
        <p className="text-xs font-bold text-center">{data.nftName}</p>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-sm">{50}</p>
          <img src="/credpoints/cred.svg" className="w-4 h-4" alt="cred" />
        </div>
      </div>
    </>
  );
};

export default NftItem;

const getImageURL = (ipfsLink: string) => {
  const cid = ipfsLink.replace("ipfs://", "");
  return `https://ipfs.io/ipfs/${cid}`;
};
