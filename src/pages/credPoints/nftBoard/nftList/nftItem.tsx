import { useEffect, useState } from "react";
import { NftType } from "../../../../type/nftType";
import Moralis from "moralis";
import axios from "axios";

interface Props {
  data: NftType;
}

const NftItem: React.FC<Props> = ({ data }) => {
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getMetadata = async () => {
      // const response = await Moralis.AptosApi.nfts.getNFTsByIds({
      //   network: "mainnet",
      //   tokenIds: [data.tokenDataIdHash],
      // });
      // console.log(response);
      // const metadata = await getJsonFromIpfs(response[0].metadataUri);
      // console.log(metadata);
      // if (metadata && metadata.image) setImageLink(metadata.image);

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
    };
    getMetadata();
  }, []);
  const getImageURL = (ipfsLink: string) => {
    const cid = ipfsLink.replace("ipfs://", "");
    return `https://ipfs.io/ipfs/${cid}`;
  };

  const getJsonFromIpfs = async (ipfsLink: string): Promise<any> => {
    try {
      const cid = ipfsLink.replace("ipfs://", "");
      const ipfsGatewayUrl = `https://ipfs.io/ipfs/${cid}`;
      const response = await axios.get(ipfsGatewayUrl);
      return response.data;
    } catch (error: any) {
      console.error(`Error fetching JSON from IPFS: ${error.message}`);
    }
  };

  return (
    <>
      <div className="w-20 md:w-[118px] flex flex-col gap-1 items-center">
        <object
          data={imageLink}
          type="image/png"
          width="120"
          height="120"
          className="rounded-md"
        >
          <img
            src="/credpoints/longestNft.svg"
            width="120"
            height="120"
            className="rounded-md"
            alt="nft"
          />
        </object>
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
