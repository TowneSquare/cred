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
            </span>
          </div>
        </>
      ) : (
        <>
          <div
            className="font-semibold cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
            <p className="whitespace-nowrap">Connect Wallet</p>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute z-10 inset-0 flex justify-center items-center bg-[#00000050]`}
          >
            <div className="relative w-[400px]  bg-gray-dark-2 border-gray-light-3 rounded-md p-8">
              <p className="text-2xl font-bold text-center">
                Connect your wallet
              </p>
              <p className="px-10 font-semibold text-center mt-4">
                Connect an Aptos wallet from the list or create a new one
              </p>
              <WalletButtons />
              <p className="text-sm font-semibold text-center mt-8 leading-[200%]">
                By connecting your wallet, you agree to the &nbsp;
                <span className="text-primary-dark">Terms & Conditions</span>
                &nbsp; and &nbsp;
                <span className="text-primary-dark">Privacy Policy</span>
              </p>
              <div
                className="absolute top-6 right-6 w-4 h-4 cursor-pointer"
                onClick={() => dispatch(toggleWalletPanel(false))}
              >
                <p className="text-3xl font-bold">×</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
