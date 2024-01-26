import { useNavigate } from "react-router-dom";
import { toggleFirstVerifyModal } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import Discord from "../connectSocial/discord";
import Twitter from "../connectSocial/twitter";

const FirstVerifyModal = () => {
  const isOpen = useAppSelector((state) => state.dialogState.bFirstVerifyModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={`${isOpen ? 'block md:hidden' : 'hidden'
        } absolute z-20 inset-0 h-[900px] flex justify-center items-center bg-black bg-opacity-90`}
    >
      <div className={`container connect-button p-4 md:p-10 w-[95%] md:w-[770px] flex flex-col items-center border border-gray-light-2 rounded-xl`}>
        <div className="grid overflow-visible">
          <p className="text-center text-base md:text-xl font-normal">
            Hey fren, it looks like you’re either new on Aptos or haven’t made any CRED eligible transactions!
            <br />
            <b>
              Verify you wallet by connecting your X or Discord account to proceed.
            </b>
          </p>
          <div className="grid mt-12 mb-8">
            <Twitter isProfileModal={false} />
            <Discord isProfileModal={false} />
          </div>
          <p className="text-center text-base md:text-xl font-normal">
            Want to first check what Cred is all about?
          </p>
          <p onClick={() => { dispatch(toggleFirstVerifyModal(false)); navigate("/credPoints") }} className="text-center text-[#45A9A7] text-base md:text-[18px] font-normal mt-2 cursor-pointer">
            Explore CRED as visitor
          </p>
        </div>
      </div>
    </div>
  );
};

export default FirstVerifyModal;