import { useAppSelector } from "../state/hooks";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const InviteCode = () => {
  const inviteCode = useAppSelector((state) => state.leaderboardState.inviteCode);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setIsCopied(true);
      toast.success("Invite code has been copied")
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };
  return (
    <>
      {inviteCode &&
        <div className="px-4 md:px-0">
          <div className="p-4 md:px-0 w-full md:w-[1030px] min-h-[80px] mb-[71px] flex justify-center items-center border border-primary-default rounded-2xl">
            <div className="grid md:flex items-center gap-2 me-4">
              <p className="text-xl font-normal">Get <b>50</b> <img className="w-[24px] inline-block" src="/credpoints/cred.svg" alt="swap" /> for every fren that joins Cred using your invite code:</p>
              <p
                className="flex justify-center items-center text-[26px] font-normal cursor-pointer hover:bg-[#ffffff1a] rounded-[50px] px-6 py-1"
                onClick={handleCopyToClipboard}
              >
                {inviteCode}&nbsp;
                <img className="inline-block w-[24px]" src="/copy.svg" alt="copy" />
              </p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default InviteCode;
