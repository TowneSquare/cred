import { useAppSelector } from "../state/hooks";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PrimaryButton from "./primaryButton";

const BonusInfo = () => {
  return (
    <div className="px-4 md:px-0 mt-4">
      <div className="flex bg-white bg-opacity-5 p-4 md:px-4 py-6 w-full md:w-[714px] min-h-[72px] mb-6 justify-center items-center border border-gray-light-7 rounded-[8px]">
        <img src="/credpoints/icon-info.svg" className="w-[22px] h-[22px] mr-2" alt="cred" />
        <p className="text-base md:text-[16px]">You will get additional
          <b>100</b> &nbsp;
          <img className="w-[24px] inline-block" src="/credpoints/cred.svg" alt="swap" />
          &nbsp;if your email is on the &nbsp;
          <a className=" inline-block " href="https://cred.townesquare.xyz" target="_blank">
            <p className="text-[#45A9A7] font-semibold">
              TowneSquare waitlist
            </p>
          </a>
        </p>
      </div>
    </div>
  );
};

export default BonusInfo;
