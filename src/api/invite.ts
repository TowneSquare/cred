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
  const url = `https://backend.townesquare.xyz/activity/getcode/${wallet}`;
  console.log("getting Invite Code", wallet);
  const res = await (
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();
  console.log(res)
  return res;
}