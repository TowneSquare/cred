import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch } from "../../state/hooks";
import { useState } from "react";

const ConnectButton = () => {
  const dispatch = useAppDispatch();
  const { connected, account, disconnect } = useWallet();
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      {connected ? (
        <>
          <div
            className="flex flex-col items-center gap-6 px-4 py-2 rounded-3xl border border-gray-light-1 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(!isOpen);
            }}
          >
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
                <img src="/header/ellipse.svg" className="w-8" alt="ellipse" />
              </div>
              <span className="font-bold">
                {account?.address.slice(0, 5)}...{account?.address.slice(-3)}
                &nbsp;{isOpen ? "▲" : "▼"}
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
            className="mt-3 font-semibold cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
            <p className="whitespace-nowrap">Connect Wallet</p>
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
