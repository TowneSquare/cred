export interface DefiActivityType{
  _id: string;
  wallet: string;
  amount: string;
  type: string;
  blockTime: string;
  defiName: string;
  txVersion: string;
  coin: string;
  isCalculated: boolean;
  updatedAt: string;
  point: number;
}