export const emailVerify = async (email: string, token: any) => {
    const url = `https://backend.townesquare.xyz/activity/verifyEmail`;
    const strData = JSON.stringify({
        email,
        token
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

export const checkEmailVerifyCode = async (email: string, token: any, code : string) => {
    const url = `https://backend.townesquare.xyz/activity/verifyEmailCode`;
    const strData = JSON.stringify({
        email,
        token,
        code
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

export const registerSocial = async (wallet: string, headerToken: any, socialType: string) => {
    const url = `https://backend.townesquare.xyz/activity/register_social`;
    const strData = JSON.stringify({
        headerToken,
        wallet,
        socialType
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

export const profileviewed = async (token: string) => {
    const url = `https://backend.townesquare.xyz/activity/viewProfile`
    const strData = JSON.stringify({
        token,
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

export async function uploadProfileImage(data: FormData) {
    return fetch("https://backend.townesquare.xyz/activity/uploadPfp", {
        method: "POST",
        body: data,
    })
        .then((resp) => resp.json())
        .catch((error) => {
            if (error.code == 400) console.log(error.message);
        });
}

export async function removeProfileImage(token: string) {
    const url = `https://backend.townesquare.xyz/activity/removePfp`
    const strData = JSON.stringify({
        token,
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

export async function setProfileName(name: string, token: string) {
    const url = `https://backend.townesquare.xyz/activity/setProfileName`
    const strData = JSON.stringify({
        name,
        token
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