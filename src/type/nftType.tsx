import { BigNumber } from "ethers";

export interface NftType {
  _id: string;
  wallet: string;
  creator: string;
  type: string;
  period: number;
  blockTime: string;
  nftName: string;
  nftCollection: string;
  nftAction: string;
  txVersion: number;
  isFirstCalc: true;
  updatedAt: string;
  url: string;

  // amount: BigNumber;
  // collectionDataIdHash: string;
  // collectionName: string;
  // creatorAddress: string;
  // lastTransactionTimestamp: string;
  // lastTransactionVersion: string;
  // name: string;
  // ownerAddress: string;
  // propertyVersion: string;
  // tableType: string;
  // tokenDataIdHash: string;
  // tokenProperties: string;
}
