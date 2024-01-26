import { useNavigate } from "react-router-dom";
import Menu from "./menu";
import MenuType from "../../type/menuType";
import ConnectButton from "./connectButton";
import JoinUs from "./joinus";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { toggleSidebar, toggleSuggestVerifyModal } from "../../state/dialog";

const SuggestVerifyNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const visitorMode = useAppSelector(state => state.globalState.visitorMode);
  return (
    <>
      {visitorMode &&
        <div onClick={() => dispatch(toggleSuggestVerifyModal(true))} className="py-[23px] items-center z-[100] lg:flex w-full mt-[92px] justify-center px-10 gap-4 bg-[#151515] shadow-xs hover:shadow-md focus:shadow-lg cursor-pointer">
          <div className="flex items-center gap-2 ">
            <p className="text-[18px] md:text-[24px] text-center">Howdy visitor! Connect you X or Discord account to get verified and <span className="text-[#45A9A7]">join Cred</span></p>
            <img src="/credpoints/arrow_left.svg" className="w-8" />
          </div>
        </div>
      }
    </>
  );
};

export default SuggestVerifyNavbar;
