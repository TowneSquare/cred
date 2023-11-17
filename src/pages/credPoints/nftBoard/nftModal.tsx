import { toggleNftList } from "../../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import NftList from "./nftList";

const NftModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.bNftList);
  const dispatch = useAppDispatch();

  return (
    <>
      {isOpen && (
        <div
          className="absolute inset-0 z-50"
          onClick={(e) => dispatch(toggleNftList(false))}
        >
          <div className="container fixed top-20 bottom-px left-px right-px flex justify-center border border-gray-light-1 rounded-md">
            <NftList />
          </div>
        </div>
      )}
    </>
  );
};

export default NftModal;
