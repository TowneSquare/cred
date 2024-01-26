import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import EligibleActivityList from "./eligibleActivityList";

const EligibleModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.beligibleModal);
  const currentTap = useAppSelector(state => state.credpointsState.eligibleDefiTapIndex);
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
      className={`fixed ${isOpen ? "block" : "hidden"
        } inset-0 z-50 flex bg-gray-dark-2 justify-center items-center`}
    >
      <div
        ref={ref}
        className={`relative container-dark1 w-full h-full mt-[100vh] md:w-[718px] ${currentTap > 1 ? 'md:h-[520px]' : 'md:h-[626px]'} flex justify-center border border-gray-light-1 rounded-[18px]`}
        style={{
          transition: "margin-top 0.5s, opacity 0.5s",
        }}
      >
        <EligibleActivityList />
      </div>
    </div>
  );
};

export default EligibleModal;
