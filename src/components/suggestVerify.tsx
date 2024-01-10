import { toggleSuggestVerifyModal } from "../state/dialog";
import { useAppDispatch } from "../state/hooks";
import PrimaryButton from "./primaryButton";

const SuggestVerify = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="hidden w-full py-5 md:flex justify-center">
            <div className="w-[66%] grid justify-center items-center">
                <div className="grid justify-center  text-center">
                    <div className="flex justify-center">
                        <img className="w-[133] justify-center" src="/credpoints/verify_suggestion.svg" alt="effect1" />
                    </div>
                    <p className="text-[18px] md:text-[22px] font-bold mt-4">Wanna see your score?</p>
                    <p className="text-[12px] md:text-[14px] font-[500] mt-2">Connect your X or Discord account to get verified and join Cred</p>
                    <PrimaryButton onClick={() => dispatch(toggleSuggestVerifyModal(true))} className="w-full mt-4 text-[15px]">
                        <p className="font-bold">Verify account and join Cred</p>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};
export default SuggestVerify;
