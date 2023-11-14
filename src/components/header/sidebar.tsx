import { toggleSidebar } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { Menus } from ".";
import ConnectButton from "./connectButton";
import Menu from "./menu";

const Sidebar = () => {
  const show = useAppSelector(state => state.dialogState.bSidebar);
  const dispatch = useAppDispatch();

  return ( 
    <div
      className={`fixed w-1/2 h-screen top-0 right-0 px-4 py-10 z-50 ${
        show ? "flex" : "hidden"
      } flex-col gap-4  border-l border-l-gray-light-1 bg-black`}
      onClick={() => dispatch(toggleSidebar(!show))}
    >
      {Menus.map((menu, index) => (
        <Menu data={menu} key={index} />
      ))}
      <ConnectButton />
    </div>
  );
};

export default Sidebar;
