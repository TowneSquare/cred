import { NftType } from "../type/nftType";

export const getMetadata = async (data: NftType) => {
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
  return res;
};

export const getImageUrl = async (url: string) => {
  const metadata = await (await fetch(url, { method: "GET" })).json();
  return metadata;
};
