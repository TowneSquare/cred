import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch } from "../../state/hooks";
import { useState } from "react";
import { getBoringAvatar } from "../../util/boringAvatar";
import { reset, updateInitInviteCode } from "../../state/credpoints";
import { reset as resetLeaderboard } from "../../state/leaderboard";
import { useNavigate } from "react-router-dom";

const ConnectButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connected, account, disconnect } = useWallet();
  const [isOpen, toggleOpen] = useState(false);

  const onDisconnet = () => {
    dispatch(reset(true));
    dispatch(resetLeaderboard(true));
    disconnect();
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
            {account?.address && <img src="/credpoints/icon-warning.svg" className="absolute right-6 top-3 w-[32px] h-[32px] mr-2" alt="cred" />}
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
                <img
                  src={getBoringAvatar(account?.address)}
                  className="w-8"
                  alt="ellipse"
                />
              </div>
              <span>
                {account?.address.slice(0, 5)}...{account?.address.slice(-3)}
                <span className="text-xs">&nbsp;&nbsp;&nbsp;{isOpen ? "▲" : "▼"}</span>
              </span>
            </div>
            {isOpen && (
              <>
                <div className="group relative z-50 flex items-center">
                  <p onClick={() => navigate("/profile")} className="text-center font-[Inter] group-hover:font-bold ml-4 mr-2">
                    My profile
                  </p>
                  {account?.address && <img src="/credpoints/icon-warning-sm.svg" className="w-[16px] h-[16px] mr-2 text-white" alt="cred" />}
                </div>
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
