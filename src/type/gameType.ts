export interface GameType {
  _id: string;
  wallet: string;
  amount: string;
  image: string;
  type: string;
  nftName: string;
  period: number;
  nftCollection: string;
  blockTime: string;
  txVersion: number;
  isCalculated: boolean;
  isFirstCalc: boolean;
  eventStr: string;
  createdAt: string
}