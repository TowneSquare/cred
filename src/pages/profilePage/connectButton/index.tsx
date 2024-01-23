import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { toggleWalletPanel } from "../../../state/dialog";
import { useAppDispatch, useAppSelector } from "../../../state/hooks";
import { useState } from "react";
import { getBoringAvatar } from "../../../util/boringAvatar";
import { reset, updateInitInviteCode } from "../../../state/credpoints";
import { reset as resetLeaderboard } from "../../../state/leaderboard";
import { useNavigate } from "react-router-dom";
import jwtEncode from 'jwt-encode';
import { setProfileName } from "../../../api/profile";
import { updateProfileName } from "../../../state/profile";

const ConnectButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { connected, account, disconnect } = useWallet();
  const [isOpen, toggleOpen] = useState(false);
  const ansList = useAppSelector((state) => state.profileState.ansName)
  const twitterId = useAppSelector((state) => state.profileState.twitterId)
  const profileName = useAppSelector((state) => state.profileState.profileName)
  const secritKey = process.env.REACT_APP_JWT_SECRIT_KEY ?? 'default-secret-key';

  const handleSetName = async (name: string) => {
    console.log(profileName, name)
    if (account) {
      const token = jwtEncode({ wallet: account.address }, secritKey);
      const res = await setProfileName(name, token)
      if (res.success) {
        console.log(profileName, res.name)
        dispatch(updateProfileName(res.name))
      }
    }
  };

  return (
    <>
      {connected ? (
        <>
          <div
            className="absolute z-50 container-light w-[252px] flex flex-col items-center gap-6 top-[355px] px-6 py-3 rounded-[35px] border-[2px] border-[#F5E27D] hover:bg-[#ffffff0f] cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleOpen(!isOpen);
            }}
          >
            <div className="flex justify-between">
              <span className="flex w-[180px]">
                {account?.address == profileName ? profileName.slice(0, 7) + "..." + profileName.slice(-3) : profileName}
              </span>
              <span className="flex text-xs items-center">&nbsp;&nbsp;&nbsp;{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <>
                <div className="grid">
                  {account &&
                    <div
                      className="w-[200px] group relative z-50 flex items-center mb-4"
                      onClick={() => handleSetName(account?.address)}
                    >
                      {account.address == profileName ?
                        <img src="/credpoints/checkOn.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                        :
                        <img src="/credpoints/checkOff.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                      }
                      <div className="grid">
                        <p className="font-[Inter] group-hover:font-bold font-[600px]">
                          Use wallet address
                        </p>
                        <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                          {account?.address.slice(0, 7)}...{account?.address.slice(-3)}
                        </p>
                      </div>
                    </div>
                  }
                  <div className="w-[200px] group grid relative z-50">
                    {ansList.map((ansName, index) => (
                      <div
                        key={index}
                        className="flex items-center mb-4"
                        onClick={() => handleSetName(ansName)}
                      >
                        {ansName == profileName ?
                          <img src="/credpoints/checkOn.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                          :
                          <img src="/credpoints/checkOff.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                        }
                        <div className="grid">
                          <p className="font-[Inter] group-hover:font-bold">
                            Use ANS name
                          </p>
                          <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                            {ansName}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {twitterId && <div
                    className="w-[200px] group flex relative z-50 items-center"
                    onClick={() => handleSetName(twitterId)}
                  >
                    {twitterId == profileName ?
                      <img src="/credpoints/checkOn.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                      :
                      <img src="/credpoints/checkOff.svg" className="w-[24px] h-[24px] mr-2 text-white" alt="cred" />
                    }
                    <div className="grid">
                      <p className="font-[Inter] group-hover:font-bold">
                        Use X handle
                      </p>
                      <p className="font-[Inter] text-[#B9B9B9] group-hover:font-bold font-[500px]">
                        {twitterId}
                      </p>
                    </div>
                  </div>
                  }
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="w-[200px] mt-3 flex justify-center cursor-pointer"
            onClick={() => dispatch(toggleWalletPanel(true))}
          >
          </div>
        </>
      )}
    </>
  );
};

export default ConnectButton;
