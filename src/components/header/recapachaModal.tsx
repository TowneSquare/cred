import { useEffect, useRef } from "react";
import { toggleRecapachaModal } from "../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import ReCAPTCHA from "react-google-recaptcha";

const RecapachaModal = () => {
  const recaptcha = useRef(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.dialogState.bRecapachaModal);
  const siteKey = process.env.REACT_APP_SITE_KEY || "";
  const handleRecaptchaChange = (value: any) => {
    if (value) {
      setTimeout(() => {
        dispatch(toggleRecapachaModal(false));
      }, 2000);
    }
  };

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } absolute z-20 -inset-y-[300px] inset-x-0 flex justify-center items-center bg-black bg-opacity-90`}
    >
      <div className="grid w-[342px] h-[147px] bg-white ">
        <p className="flex text-black items-center pl-4 text-sm">Please check the box below to proceed.</p>
        <div className="flex justify-center">
          <ReCAPTCHA
            ref={recaptcha}
            sitekey={siteKey}
            onChange={handleRecaptchaChange}
          />
        </div>
      </div>
    </div>
  );
};

export default RecapachaModal;