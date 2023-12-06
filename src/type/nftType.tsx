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
}
