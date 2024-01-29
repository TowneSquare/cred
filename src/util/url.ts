export const getImageURL = (ipfsLink: string) => {
  if (ipfsLink.startsWith("ipfs://")) {
    const cid = ipfsLink.replace("ipfs://", "");
    return `https://ipfs.io/ipfs/${cid}`;
  } else {
    return ipfsLink;
  }
};
