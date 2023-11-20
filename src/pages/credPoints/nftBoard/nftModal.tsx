import { useEffect, useRef } from "react";
import { toggleNftList } from "../../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import NftList from "./nftList";

const NftModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.bNftList);
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
      className={`fixed ${isOpen ? "block" : "hidden"} inset-0 z-50 flex bg-gray-dark-2`}
      onClick={(e) => dispatch(toggleNftList(false))}
    >
      <div
        ref={ref}
        className={`relative container mt-[100vh] opacity-0 mx-px mb-px flex justify-center border border-gray-light-1 rounded-md`}
        style={{
          transition: "margin-top 0.5s, opacity 0.5s"
        }}
      >
        <NftList />
        <p
          className="absolute top-6 right-6 text-2xl"
          onClick={(e) => dispatch(toggleNftList(false))}
        >
          ✖
        </p>
      </div>
    </div>
  );
};

export default NftModal;
