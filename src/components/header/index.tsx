import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import MenuType from "../../type/menu_type";
import ConnectButton from "./connect_button";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [show, toggleShow] = useState(false);

  return (
    <>
      <div className="hidden lg:flex w-full h-[92px] justify-between items-center bg-gray-dark-2 px-10 gap-4 z-10">
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
      <div className="relative flex lg:hidden w-full h-[92px] justify-between items-center bg-gray-dark-2 px-2 gap-4 z-10">
        <img
          src="/logo.svg"
          className="h-[29px] cursor-pointer"
          onClick={() => navigate("/")}
        />
        <img
          className="w-8"
          src="/header/list.svg"
          alt="list"
          onClick={() => toggleShow(!show)}
        />
        <div
          className={`absolute w-1/2 h-screen top-0 right-0 px-4 py-10 ${
            show ? "flex" : "hidden"
          } flex-col gap-4  border-l border-l-gray-light-1 bg-gray-dark-3`}
          onClick={() => toggleShow(!show)}
        >
          {Menus.map((menu, index) => (
            <Menu data={menu} key={index} />
          ))}
          <ConnectButton />
        </div>
      </div>
    </>
  );
};

const Menus: MenuType[] = [
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
