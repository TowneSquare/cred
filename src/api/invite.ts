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
  console.log(res);

  return res;
};
