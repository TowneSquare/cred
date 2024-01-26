import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import ReCAPTCHA from "react-google-recaptcha";
import OTPInput from "react-otp-input";
import PrimaryButton from "../primaryButton";
import { toggleEmailVerifyModal } from "../../state/dialog";
import { checkEmailVerifyCode } from "../../api/profile";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import jwtEncode from 'jwt-encode';
import { updateEmail } from "../../state/profile";

const EmailVerifyModal = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState(false);
  const recaptcha = useRef(null);
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.dialogState.bEmailVerifyModal);
  const secretKey = process.env.REACT_APP_JWT_SECRET_KEY ?? 'default-secret-key';
  const { connected, account } = useWallet();

  const requestedEmail = useAppSelector((state) => state.profileState.requestEmail)
  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  const onInviteCode = async () => {
    if (account) {
      const token = jwtEncode({ wallet: account?.address }, secretKey);
      const inviteCode = otp.toUpperCase()
      const res = await checkEmailVerifyCode(requestedEmail, token, inviteCode);
      if (res.success) {
        console.log("code sent", res)
        setSuccess(true)
        dispatch(updateEmail(res.email))
      }
    }
  };

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'
        } absolute z-20 -inset-y-[300px] inset-x-0 flex justify-center items-center bg-black bg-opacity-90`}
    >
      {success ? (
        <div className="w-full flex flex-col items-center">
          <div className="bg-[#121212] p-4 md:p-6 w-[312px] md:w-[408px] h-[312px] md:h-[251px] flex flex-col items-center border border-gray-light-2 rounded-xl">
            <div className="flex justify-between md:items-center md:h-[26px] w-[264px] md:w-[355px]">
              <p className="text-xl font-bold">
                Insert the Cred verification code
              </p>
              <div
                className="cursor-pointer"
                onClick={() => dispatch(toggleEmailVerifyModal(false))}
              >
                <p className="text-3xl font-[300px]">×</p>
              </div>
            </div>
            <img src="/credpoints/check_mark_big.svg" className="w-[46px] h-[46px] mt-8 mb-4 md:mb-8" alt="cred" />
            <p className="block md:hidden text-xl font-bold mb-8">
              LET'S GOOOO!
            </p>
            <PrimaryButton
              className="w-[264px] md:w-[300px] z-[4] h-[51px]"
              onClick={() => dispatch(toggleEmailVerifyModal(false))}
            >
              <span className="text-sm md:text-base">Great</span>
            </PrimaryButton>
          </div>
        </div>
      ) : (<div className="flex flex-col items-center">
        <div className={`bg-[#121212] p-4 md:p-6 w-[312px] md:w-[408px] ${error ? 'h-[447px]' : 'h-[363px]'}  md:h-[341px] flex flex-col items-center border border-gray-light-2 rounded-xl`}>
          <div className="flex justify-between md:items-center md:h-[26px] w-[264px] md:w-[355px]">
            <p className="text-xl font-bold">
              Insert the Cred verification code
            </p>
            <div
              className="cursor-pointer"
              onClick={() => dispatch(toggleEmailVerifyModal(false))}
            >
              <p className="text-3xl font-[300px]">×</p>
            </div>
          </div>
          <p className="text-center text-[13px] md:text-sm mt-6 font-thin">
            Insert the Cred verification code you received in the email to get the reward
          </p>
          <div className="mt-6">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="w-1 md:w-3"></span>}
              renderInput={(props) => <input {...props} />}
              inputStyle="otp-input"
            />
          </div>
          {error && (
            <div className="mt-12 mb-4 flex justify-center items-center h-4">
              <p className="text-sm font-semibold text-[#DC3232]">{error}</p>
            </div>
          )}
          <PrimaryButton
            className="mt-6 w-[264px] md:w-[300px] z-[4] h-[51px]"
            onClick={() => onInviteCode()}
          >
            <span className="text-sm md:text-base">Insert code</span>
          </PrimaryButton>
          <p onClick={() => dispatch(toggleEmailVerifyModal(false))} className="text-[#45A9A7] text-sm cursor-pointer mt-6 font-bold">Resend verification code</p>
        </div>
      </div>)}
    </div>
  );
};

export default EmailVerifyModal;