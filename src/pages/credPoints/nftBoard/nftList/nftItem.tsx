import { useEffect, useState } from "react";
import { NftType } from "../../../../type/nftType";
import Moralis from "moralis";
import axios from "axios";
import { getImageURL } from "../../../../util/url";
import { getImageUrl, getMetadata } from "../../../../api/metadata";
import LoadingImage from "../../../../components/loadingImage";

interface Props {
  data: NftType;
}

const NftItem: React.FC<Props> = ({ data }) => {
  const [imageLink, setImageLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await getMetadata(data);
        const initUrl = res.url;
        if (initUrl.endsWith(".json") == true) {
          const res = await getImageUrl(initUrl);
          setImageLink(getImageURL(res.image));
        } else {
          setImageLink(getImageURL(res.url));
        }
      } catch (e) { }
    };
    getImage();
  }, []);

  return (
    <>
      <div className="w-20 md:w-[118px] flex flex-col gap-1 items-center">
        <LoadingImage url={imageLink} className="min-w-[80px] min-h-[80px] md:min-w-[120px] md:min-h-[120px]" />

        <p className="text-xs font-bold text-center">{data.nftName}</p>
        <div className="flex gap-1 justify-center items-center">
          <p className="text-sm">{data.dailyPoint}</p>
          <img src="/credpoints/cred.svg" className="w-4 h-4" alt="cred" />
        </div>
      </div>
    </>
  );
};

export default NftItem;
