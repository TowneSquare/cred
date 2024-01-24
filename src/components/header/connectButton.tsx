import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { useEffect, useState } from "react";
import { getBoringAvatar } from "../../util/boringAvatar";
import { reset } from "../../state/credpoints";
import { reset as resetLeaderboard } from "../../state/leaderboard";
import { resetProfile } from "../../state/profile";
import { useNavigate } from "react-router-dom";
import { resetGlobal } from "../../state/global";

const ConnectButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connected, account, disconnect } = useWallet();
  const [isOpen, toggleOpen] = useState(false);
  const profileViewed = useAppSelector(state => state.profileState.profileViewed);
  const inviteCode = useAppSelector(state => state.credpointsState.initInviteCode);
  const avatar = useAppSelector(state => state.profileState.avatar);
  const profileName = useAppSelector(state => state.profileState.profileName);

  const onDisconnet = () => {
    dispatch(reset(true));
    dispatch(resetLeaderboard(true));
    dispatch(resetProfile(true));
    dispatch(resetGlobal(true));
    disconnect();
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <>
      {connected ? (
        <>
          <div
            className="w-[200px] flex flex-col items-center gap-6 px-6 py-3 rounded-3xl border border-gray-light-1 hover:bg-[#ffffff30] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(!isOpen);
            }}
          >
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
                <img
                  src={avatar == "" ? getBoringAvatar(account?.address) : avatar}
                  className="w-8 rounded-full"
                  alt="ellipse"
                />
              </div>
              <span>
                {account?.address == profileName || !profileName ? account?.address.slice(0, 5) + "..." + account?.address.slice(-3) : profileName}
                <span className="text-xs">&nbsp;&nbsp;&nbsp;{isOpen ? "▲" : "▼"}</span>
              </span>
            </div>
            {isOpen && (
              <>
                {inviteCode &&
                  <div className="group relative z-50 flex items-center">
                    <p onClick={() => navigate("/profile")} className="text-center font-[Inter] group-hover:font-bold ml-4 mr-2">
                      My profile
                    </p>
                    {!profileViewed && <img src="/credpoints/icon-warning-sm.svg" className="w-[16px] h-[16px] mr-2 text-white" alt="cred" />}
                  </div>
                }
                <div className="group relative z-50" onClick={() => onDisconnet()}>
                  <p className="text-center font-[Inter] group-hover:font-bold">
                    Disconnect Wallet
                  </p>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[200px] mt-3 flex justify-center cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
            <p className="font-semibold whitespace-nowrap">Connect Wallet</p>
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
