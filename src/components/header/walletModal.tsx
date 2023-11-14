import { toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import WalletButtons from "../../wallet-adapter/WalletButtons";

const WalletModal = () => {
  const isOpen = useAppSelector(state => state.dialogState.bWalletPanel);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute z-20 inset-0 flex justify-center items-center bg-[#00000050]`}
    >
      <div className="relative w-[400px]  bg-gray-light-1 border-gray-light-3 rounded-md p-8">
        <p className="text-2xl font-bold text-center">Connect your wallet</p>
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
  );
};

export default WalletModal;
