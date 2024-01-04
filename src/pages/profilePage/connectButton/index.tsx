import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../../state/dialog";
import { useAppDispatch } from "../../../state/hooks";
import { useState } from "react";
import { getBoringAvatar } from "../../../util/boringAvatar";
import { reset, updateInitInviteCode } from "../../../state/credpoints";
import { reset as resetLeaderboard } from "../../../state/leaderboard";
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
            className="absolute z-50 container-light w-[252px] flex flex-col items-center gap-6 top-[355px] px-6 py-3 rounded-[35px] border-[2px] border-[#F5E27D] hover:bg-[#ffffff0f] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(!isOpen);
            }}
          >
            <div className="flex justify-between">
              <span className="flex w-[180px]">
                {account?.address.slice(0, 7)}...{account?.address.slice(-3)}
              </span>
              <span className="flex text-xs items-center">&nbsp;&nbsp;&nbsp;{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <>
                <div className="grid">
                  <div className="w-[200px] group relative z-50 flex items-center mb-4">
                    <img src="/credpoints/checkOn.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                    <div className="grid">
                      <p className="font-[Inter] group-hover:font-bold font-[600px]">
                        Use wallet address
                      </p>
                      <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                        {account?.address.slice(0, 7)}...{account?.address.slice(-3)}
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] group flex relative z-50 items-center mb-4">
                    <img src="/credpoints/checkOff.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                    <div className="grid">
                      <p className="font-[Inter] group-hover:font-bold">
                        Use ANS name
                      </p>
                      <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                        {account?.address.slice(0, 7)}...{account?.address.slice(-3)}
                      </p>
                    </div>
                  </div>
                  <div className="w-[200px] group flex relative z-50 items-center">
                    <img src="/credpoints/checkOff.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                    <div className="grid">
                      <p className="font-[Inter] group-hover:font-bold">
                        Use X handle
                      </p>
                      <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                        {account?.address.slice(0, 7)}...{account?.address.slice(-3)}
                      </p>
                    </div>
                  </div>
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
