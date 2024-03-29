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
  const url = "https://backend.townesquare.xyz/activity/getProfile";
  const data = { token: wallet };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    // Handle errors as needed
    console.error("Error fetching invite code:", error);
    throw error; // Rethrow the error or handle it accordingly
  }
};