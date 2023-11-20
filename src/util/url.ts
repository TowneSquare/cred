export const getImageURL = (ipfsLink: string) => {
  const cid = ipfsLink.replace("ipfs://", "");
  return `https://ipfs.io/ipfs/${cid}`;
};
