import { useEffect, useRef, useState } from "react";
import { toggleReferral } from "../../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import ReferralList from "./tokenList";

const TokenListModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.bReferral);
  const dispatch = useAppDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      setTimeout(() => {
        (ref.current as any).style.marginTop = "16px";
        (ref.current as any).style.opacity = 1;
      }, 100);
    } else if (!isOpen && ref.current) {
      (ref.current as any).style.marginTop = "100vh";
      (ref.current as any).style.opacity = 0;
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed ${
        isOpen ? "block" : "hidden"
      } inset-0 z-50 flex bg-gray-dark-2`}
    >
      <div
        ref={ref}
        className={`relative container-dark w-full mt-[100vh] opacity-0 mx-px mb-px flex justify-center border border-gray-light-1 rounded-md`}
        style={{
          transition: "margin-top 0.5s, opacity 0.5s",
        }}
      >
        <ReferralList />
        <img
          src="/credpoints/close.svg"
          className="absolute top-5 right-6 cursor-pointer"
          onClick={(e) => dispatch(toggleReferral(false))}
        />
      </div>
    </div>
  );
};

export default TokenListModal;
