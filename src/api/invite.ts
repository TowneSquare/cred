export const checkInviteCode = async (inviteCode: string) => {
  const url = `https://backend.townesquare.xyz/activity/referral`;
  const strData = JSON.stringify({
    inviteCode
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


export const getInviteCode = async (wallet: string) => {
  const url = `https://backend.townesquare.xyz/activity/getProfile/${wallet}`;
  const res = await (
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  return res;
}