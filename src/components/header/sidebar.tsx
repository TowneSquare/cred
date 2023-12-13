import { toggleSidebar, toggleWalletPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { Menus } from ".";
import Menu from "./menu";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { getBoringAvatar } from "../../util/boringAvatar";
import { reset } from "../../state/credpoints";
import { reset as resetLeaderboard } from "../../state/leaderboard";
import JoinUs from "./joinus";

const Sidebar = () => {
  const show = useAppSelector((state) => state.dialogState.bSidebar);
  const dispatch = useAppDispatch();

  const { connected, account, disconnect } = useWallet();
  const onDisconnet = () => {
    dispatch(reset(true));
    dispatch(resetLeaderboard(true));
    disconnect();
  }
  return (
    <div
      className={`${show ? "block" : "hidden"
        } fixed w-full h-screen inset-0 bg-gray-dark-1 z-50`}
      onClick={() => dispatch(toggleSidebar(false))}
    >
      <div
        className="fixed w-2/3 h-screen top-0 right-0 z-50 flex  flex-col items-center justify-between gap-4  bg-[#2A2A2A]"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleSidebar(false));
        }}
      >
        <div className="h-10 mt-10">
          {connected && (
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
                <img
                  src={getBoringAvatar(account?.address)}
                  className="w-8"
                  alt="ellipse"
                />
              </div>
              <span className="hover:font-bold">
                {account?.address.slice(0, 5)}...{account?.address.slice(-3)}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-8">
          {Menus.map((menu, index) => (
            <Menu data={menu} key={index} />
          ))}
        </div>
        <div className="absolute bottom-[100px]">
          <div className="flex flex-col items-center gap-6">
            <p className="text-gray-light-3">Fllow us</p>
            <JoinUs />
          </div>
        </div>
        <div className="w-full py-4 flex justify-center border-t border-gray-light-1">
          {connected ? (
            <p
              className="text-gray-light-5 hover:text-white font-semibold whitespace-nowrap"
              onClick={() => onDisconnet()}
            >
              Disconnect Wallet
            </p>
          ) : (
            <p
              className="text-gray-light-5 hover:text-white font-semibold whitespace-nowrap"
              onClick={() => dispatch(toggleWalletPanel(true))}
            >
              Connect Wallet
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
