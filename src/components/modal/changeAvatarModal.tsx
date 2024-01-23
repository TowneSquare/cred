import { useState } from "react";
import { toggleChangeAvatarPanel } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import jwtEncode from 'jwt-encode';
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { removeProfileImage, uploadProfileImage } from "../../api/profile";
import { updateProfileImage } from "../../state/profile";
import { getBoringAvatar } from "../../util/boringAvatar";

const ChangeAvatarModal = () => {
  const { connected, account } = useWallet();
  const secritKey = process.env.REACT_APP_JWT_SECRIT_KEY ?? 'default-secret-key';
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.dialogState.bChangeAvatarPanel);
  const avatar = useAppSelector((state) => state.profileState.avatar)

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    if (file && account?.address) {
      const token = jwtEncode({ wallet: account.address }, secritKey);
      const data = new FormData();
      data.append('token', token);
      data.append('file', file);
      const res = await uploadProfileImage(data);
      if (res.success) {
        dispatch(updateProfileImage(res.profile.avatar))
        dispatch(toggleChangeAvatarPanel(false))
      }
    }
  };

  const handleProfileImage = async (event: any) => {
    if (account?.address && avatar != "") {
      const token = jwtEncode({ wallet: account.address }, secritKey);
      const res = await removeProfileImage(token);
      if (res.success) {
        dispatch(updateProfileImage(res.profile.avatar))
        dispatch(toggleChangeAvatarPanel(false))
      }
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } absolute z-20 inset-0 flex justify-center items-center bg-black bg-opacity-90`}
    >
      <div className="grid w-[416px] h-[420px]">
        <div className="flex justify-center">
          <div className="relative w-[170px] h-[170px] md:w-[300px] md:h-[300px] border-[2px] border-[#F5E27D] rounded-full">
            <img
              src="/credpoints/cancel.svg"
              className="cursor-pointer absolute -right-20 -top-[100px] md:-right-20 md:-top-6"
              onClick={() => dispatch(toggleChangeAvatarPanel(false))}
            />
            <img className="w-[170px] h-[170px] md:w-[300px] md:h-[300px] rounded-full z-50" src={avatar == "" ? getBoringAvatar(account?.address) : avatar} alt="" />
          </div>
        </div>
        <div className="grid justify-center md:flex md:justify-between mt-[144px] md:mt-[64px]">
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileUpload}
            accept="image/*"
          />
          {avatar == "" ?
            <button
              className="w-[294px] md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#F5E27D] text-[#F5E27D] text-opacity-70 font-bold text-[16px] text-center"
              onClick={handleButtonClick}
            >
              <img src="/credpoints/upload_simple.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Upload PFP
            </button>
            :
            <button
              className="w-[294px] md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#F5E27D] text-[#F5E27D] text-opacity-70 font-bold text-[16px] text-center"
              onClick={handleButtonClick}
            >
              <img src="/credpoints/arrows_clock_wise.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Replace PFP
            </button>
          }
          <button
            className={`mt-4 md:mt-0 ${avatar == "" ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}  w-[294px] md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#F5E27D] text-[#F5E27D] text-opacity-70 font-bold text-[16px] text-center`}
            onClick={handleProfileImage}
          >
            <img src="/credpoints/x_circle.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Remove PFP
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAvatarModal;
