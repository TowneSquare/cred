import { useAppSelector } from "../state/hooks";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const InviteCode = () => {
  const inviteCode = useAppSelector((state) => state.credpointsState.inviteCode);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode ?? "");
      setIsCopied(true);
      toast.success("Invite code has been copied", {
        className: 'custom-toast',
        // bodyClassName: 'custom-toast-body',
        // progressClassName: 'custom-toast-progress',
      });
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <>
      {inviteCode &&
        <div className="px-4 md:px-0">
          <div className="grid bg-[#191919] p-4 md:px-0 w-full md:w-[1030px] min-h-[80px] mb-[71px] justify-center items-center border border-gray-light-7 rounded-2xl">
            <div className="grid md:flex items-center gap-2 me-4 justify-center">
              <p className="text-base md:text-xl font-normal">Get <b>50</b> <img className="w-[24px] inline-block" src="/credpoints/cred.svg" alt="swap" /> for every fren that joins Cred using your invite code:</p>
              <div className="justify-center flex">
                <p
                  className="w-[167px] flex justify-center items-center text-[22px] md:text-[26px] font-normal cursor-pointer hover:bg-[#ffffff1a] rounded-[50px] px-6 py-1"
                  onClick={handleCopyToClipboard}
                >
                  {inviteCode}&nbsp;
                  <img className="inline-block w-[24px]" src="/copy.svg" alt="copy" />
                </p>
              </div>
            </div>
            <div className="flex mb-2">
              <img src="/credpoints/icon-info.svg" className="w-[22px] h-[22px] mr-2" alt="cred" />
              <p className="text-base md:text-[18px]">You and your fren will only earn referral points if this address is an active account on Aptos</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default InviteCode;
