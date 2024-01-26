import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import MenuType from "../../type/menuType";
import ConnectButton from "./connectButton";
import JoinUs from "./joinus";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleSidebar } from "../../state/dialog";
import { fetchProfile } from "../../state/profile";
import { useWallet } from "@aptos-labs/wallet-adapter-react";

const Header = () => {
  const inviteCode = useAppSelector((state) => state.credpointsState.initInviteCode);
  const profileViewed = useAppSelector((state) => state.profileState.profileViewed);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connected, account } = useWallet();

  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const element = document.getElementById("leaderboard");
    if (element) {
      element.addEventListener("scroll", () => {
        setScroll(element.scrollTop);
      });
    }
  }, []);

  const visible = scroll > 200;

  useEffect(() => {
    if (inviteCode) {
      dispatch(fetchProfile(account?.address));
    }
  }, [inviteCode])

  return (
    <>
      <div className={`bg-[#0C0C0C] ${visible ? 'bg-opacity-100' : 'bg-opacity-0'}  z-[100] fixed hidden lg:flex w-full h-[92px] justify-between px-10 gap-4`}>
        <div className="flex items-center">
          <img
            src="/logo.svg"
            className="h-[35px] cursor-pointer w-[123px]"
            onClick={() => navigate("/credPoints")}
          />
          <img
            src="/logo_season01.svg"
            className="h-[35px] cursor-pointer ml-3 w-[106px]"
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
            {inviteCode && !profileViewed && <img src="/credpoints/icon-warning.svg" className="absolute right-6 top-3 w-[32px] h-[32px] mr-2" alt="cred" />}
            <ConnectButton />
          </div>
        </div>
      </div>
      <div className="fixed flex lg:hidden w-full h-[92px] justify-between items-center px-4 gap-4 z-30  bg-[#0C0C0C]">
        {inviteCode && !profileViewed && <img src="/credpoints/icon-warning.svg" className="absolute -right-2 top-3 w-[32px] h-[32px] mr-2" alt="cred" />}
        <div className="flex">
          <img
            src="/logo.svg"
            className="h-[29px] cursor-pointer w-[100px]"
            onClick={() => navigate("/credPoints")}
          />
          <img
            src="/logo_season01.svg"
            className="h-[35px] cursor-pointer ml-3 w-[92px]"
            onClick={() => navigate("/credPoints")}
          />
        </div>

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
