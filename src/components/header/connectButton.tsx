import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import WalletButtons from "../../wallet-adapter/WalletButtons";

const ConnectButton = () => {
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();
  const isOpen = useAppSelector((state) => state.dialogState.bWalletPanel);

  return (
    <>
      {connected ? (
        <>
          <div className="flex items-center gap-2 px-4 py-2 rounded-3xl border border-gray-light-1">
            <div className="w-8 h-8">
              <img src="/header/ellipse.svg" className="w-8" alt="ellipse" />
            </div>
            <span className="font-bold">
              {account?.address.slice(0, 5)}...{account?.address.slice(-3)}
              &nbsp;▼▲
            </span>
          </div>
        </>
      ) : (
        <>
          <div
            className="font-semibold cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
            <p className="whitespace-nowrap">Connect Wallet▼</p>
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
