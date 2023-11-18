import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch } from "../../state/hooks";
import { useState } from "react";
import { getBoringAvatar } from "../../util/boringAvatar";

const ConnectButton = () => {
  const dispatch = useAppDispatch();
  const { connected, account, disconnect } = useWallet();
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      {connected ? (
        <>
          <div
            className="w-[200px] flex flex-col items-center gap-6 px-6 py-4 rounded-3xl border border-gray-light-1 hover:bg-[#ffffff30] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(!isOpen);
            }}
          >
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
              <div className="group relative z-50" onClick={() => disconnect()}>
                <p className="text-center font-[Inter] group-hover:font-bold">
                  Disconnect Wallet
                </p>
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[200px] mt-3 flex justify-center cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
            <p className=" font-semibold whitespace-nowrap">Connect Wallet</p>
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
