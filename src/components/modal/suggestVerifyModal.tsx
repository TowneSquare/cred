import { toggleSuggestVerifyModal } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import Discord from "../connectSocial/discord";
import Twitter from "../connectSocial/twitter";

const SuggestVerifyModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.bSuggestVerifyModal);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } absolute z-20  h-[800px] md:h-full inset-0 flex justify-center items-center bg-black bg-opacity-90`}
    >
      <div className={`container connect-button mt-2 p-4 md:p-10 w-[95%] md:w-[770px] flex flex-col items-center border border-gray-light-2 rounded-xl`}>
        <div className="grid">
          <div className="flex justify-center">
            <p className="text-center text-base md:text-xl font-bold w-[85%]">
              Verify you wallet by connecting your X or Discord account to proceed.
            </p>
            <p onClick={() => dispatch(toggleSuggestVerifyModal(false))} className="text-[36px] font-[100] cursor-pointer absolute top-0 right-4 md:top-[28px] md:right-[40px]">×</p>
          </div>
          <div className="grid mt-12">
            <Twitter isProfileModal={false} />
            <Discord isProfileModal={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestVerifyModal;