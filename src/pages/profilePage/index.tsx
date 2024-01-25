import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import jwtEncode from 'jwt-encode';
import Header from "../../components/header";
import Discord from "../../components/connectSocial/discord";
import Twitter from "../../components/connectSocial/twitter";
import Ans from "./ans";
import Email from "./email";
import ConnectButton from "./connectButton";
import "./index.css";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleChangeAvatarPanel } from "../../state/dialog";
import { profileviewed, setProfileName } from "../../api/profile";
import { updateProfileViewed } from "../../state/profile";
import { getBoringAvatar } from "../../util/boringAvatar";
import { fetchCredpoints, updateCredPointsLive } from "../../state/credpoints";
import { fetchRankings } from "../../state/leaderboard";

const ProfilePage = () => {
  const secritKey = process.env.REACT_APP_JWT_SECRIT_KEY ?? 'default-secret-key';
  const { connected, account } = useWallet();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const inviteCode = useAppSelector((state) => state.credpointsState.inviteCode);
  const initialized = useAppSelector(state => state.globalState.initialized);
  const profileViewed = useAppSelector(state => state.profileState.profileViewed);
  const profileImage = useAppSelector(state => state.profileState.avatar);
  const initInviteCode = useAppSelector(
    (state) => state.credpointsState.initInviteCode
  );
  const initInviteCodeRef = useRef(initInviteCode);

  useEffect(() => {
    const fetchData = async () => {
      if (inviteCode && account?.address) {
        if (!profileViewed) {
          const token = jwtEncode({ wallet: account.address }, secritKey);
          const res = await profileviewed(token);
          if (res.success) {
            console.log(res, "        ", account.address)
            dispatch(updateProfileViewed(true))
          }
        }
      }
    };
    fetchData();
  }, [inviteCode, account])

  useEffect(() => {
    initInviteCodeRef.current = initInviteCode;
  }, [initInviteCode, account]);

  useEffect(() => {
    const fetchData = async () => {
      if (!initInviteCodeRef.current) {
        navigate('/')
      }
    };
    const fetchDataTimeout = setTimeout(() => {
      fetchData();
    }, 5000);
    return () => {
      clearTimeout(fetchDataTimeout);
    };
  }, [initInviteCodeRef]);

  useEffect(() => {
    if (connected && account && initInviteCode) {
      dispatch(updateCredPointsLive(false));
      dispatch(fetchRankings(account.address));
      dispatch(fetchCredpoints({ wallet: account.address, initInviteCode }));
    }
  }, [connected, account, initInviteCode]);

  return (
    <div className="parallax font-[Inter]" id="cred-point">
      <Header />
      <div className="parallax__group">
        <div className="parallax__layer cred__effect1">
          <img src="/credpoints/effect1.png" alt="effect1" />
        </div>
        <div className="parallax__layer cred__effect2">
          <img src="/credpoints/effect2.png" alt="effect2" />
        </div>
        <div className="parallax__layer cred__effect3">
          <img src="/credpoints/effect3.png" alt="effect3" />
        </div>
      </div>
      <div className="relative w-full grid justify-center z-10 !bg-fixed">
        <div className="w-full md:w-[1000px] flex flex-col items-center mt-[172px] mb-10">
          <p className="text-2xl font-bold">MY PROFILE</p>
          <div className="flex justify-center mt-8 mb-4">
            <div className="relative border-[2px] border-[#F5E27D] rounded-full">
              {!initialized ? (
                <img className="w-[100px] h-[100px] rounded-full z-50" src="/default-image.png" alt="" />
              ) : (
                <img className="w-[100px] h-[100px] rounded-full z-50" src={profileImage == "" ? getBoringAvatar(account?.address) : profileImage} alt="" />
              )}
              <div onClick={() => dispatch(toggleChangeAvatarPanel(true))} className="absolute top-0 left-0 w-[100px] h-[100px] group hover:bg-[black] hover:opacity-70 rounded-full flex justify-center items-center cursor-pointer">
                <p className="hidden group-hover:block text-white font-bold">Change</p>
              </div>
            </div>
          </div>
          <ConnectButton />
        </div>
        <div className="min-w-[320px] md:w-[989px] flex flex-col items-center mt-[40px] mb:mt-[116px] mb-10 justify-center">
          <Twitter isProfileModal={true} />
          <Discord isProfileModal={true} />
          <Ans />
          <Email />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
