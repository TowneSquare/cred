import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import MenuType from "../../type/menuType";
import ConnectButton from "./connectButton";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleSidebar } from "../../state/dialog";

const Header = () => {
  const navigate = useNavigate();
  const show = useAppSelector(state => state.dialogState.bSidebar);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="hidden lg:flex w-full h-[92px] justify-between items-center bg-gray-dark-2 px-10 gap-4 z-30">
        <div className="flex items-center gap-4 md:gap-12">
          <img
            src="/logo.svg"
            className="h-[35px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="h-full flex items-center justify-normal gap-8 lg:gap-12">
          {Menus.map((menu, index) => (
            <Menu data={menu} key={index} />
          ))}
        </div>
        <ConnectButton />
      </div>
      <div className="flex lg:hidden w-full h-[92px] justify-between items-center bg-gray-dark-2 px-2 gap-4 z-30">
        <img
          src="/logo.svg"
          className="h-[29px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <img
          className="w-8"
          src="/header/list.svg"
          alt="list"
          onClick={() => dispatch(toggleSidebar(true))}
        />
      </div>
    </>
  );
};

export const Menus: MenuType[] = [
  {
    href: "/credPoints",
    label: "Cred points",
  },
  {
    href: "/leaderboard",
    label: "Leaderboard",
  },
  {
    href: "/about",
    label: "About",
  },
];
export default Header;
