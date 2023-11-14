import { toggleSidebar } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { Menus } from ".";
import ConnectButton from "./connectButton";
import Menu from "./menu";

const Sidebar = () => {
  const show = useAppSelector((state) => state.dialogState.bSidebar);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${show ? "block" : "hidden"} fixed w-full h-screen inset-0`}
      onClick={() => dispatch(toggleSidebar(false))}
    >
      <div
        className="fixed w-1/2 h-screen top-0 right-0 px-4 py-10 z-50 flex  flex-col gap-4  border-l border-l-gray-light-1 bg-black"
        onClick={(e) => {
          e.stopPropagation();
          dispatch(toggleSidebar(false));
        }}
      >
        {Menus.map((menu, index) => (
          <Menu data={menu} key={index} />
        ))}
        <ConnectButton />
      </div>
    </div>
  );
};

export default Sidebar;
