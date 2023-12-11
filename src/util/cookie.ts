import Cookies from "js-cookie";
import { INVITE_CODE } from "../constants/inviteCode";

export const checkCookie = (address: string | undefined) => {
  const inviteCodeCache = Cookies.get(INVITE_CODE);
  if (inviteCodeCache != undefined) {
    const inviteCodeCacheJson = JSON.parse(inviteCodeCache as string);

    if (inviteCodeCacheJson && inviteCodeCacheJson.wallet) {
      const walletArray = inviteCodeCacheJson.wallet;
      for (let wallet of walletArray) {
        if (wallet.address == address) {
          return wallet.code
        }
      }
    }
  }
  return undefined
}