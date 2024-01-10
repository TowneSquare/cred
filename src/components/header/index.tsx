import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import MenuType from "../../type/menuType";
import ConnectButton from "./connectButton";
import JoinUs from "./joinus";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleSidebar } from "../../state/dialog";

const Header = () => {
  const inviteCode = useAppSelector((state) => state.credpointsState.initInviteCode);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <div className=" bg-[#0C0C0C] z-[100] fixed hidden lg:flex w-full h-[92px] justify-between px-10 gap-4">
        <div className="flex items-center gap-4 md:gap-12">
          <img
            src="/logo.svg"
            className="h-[35px] cursor-pointer"
            onClick={() => navigate("/credPoints")}
          />
        </div>
        <div className="h-full flex items-center justify-normal gap-8 lg:gap-12">
          {Menus.map((menu, index) => (
            <Menu data={menu} key={index} />
          ))}
        </div>
        <div className="flex">
          <div className="mr-[34px] flex">
            <JoinUs />
          </div>
          <div className="mt-5">
            {inviteCode && <img src="/credpoints/icon-warning.svg" className="absolute right-6 top-3 w-[32px] h-[32px] mr-2" alt="cred" />}
            <ConnectButton />
          </div>
        </div>
      </div>
      <div className="fixed flex lg:hidden w-full h-[92px] justify-between items-center px-2 gap-4 z-30  bg-gray-dark-3">
        {inviteCode && <img src="/credpoints/icon-warning.svg" className="absolute -right-2 top-3 w-[32px] h-[32px] mr-2" alt="cred" />}
        <img
          src="/logo.svg"
          className="h-[29px] cursor-pointer"
          onClick={() => navigate("/credPoints")}
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
    color: "#F5E27D",
  },
  {
    href: "/leaderboard",
    label: "Leaderboard",
    color: "#A3A1E2",
  },
  {
    href: "/about",
    label: "About",
    color: "#45A9A7",
  },
];
export default Header;
