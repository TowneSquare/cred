import Header from "../../components/header";
import SuggestVerifyNavbar from "../../components/header/suggestVerifyNavbar";
import PrimaryButton from "../../components/primaryButton";
import PrivacyPolicy from "../../components/privacyPolicy";
import { useAppSelector } from "../../state/hooks";

const About = () => {
  const visitorMode = useAppSelector(state => state.globalState.visitorMode)
  return (
    <div className="parallax" id="about">
      <Header />
      {visitorMode && <SuggestVerifyNavbar />}
      <div className="w-full flex justify-center">
        <div className="w-full md:w-[730px] px-4 md:px-0 flex flex-col items-center mt-44 mb-10">
          <h1 className="text-2xl md:text-3xl font-bold">ABOUT CRED</h1>
          <p className="mt-8 text-base md:text-xl">
            Cred is a loyalty points system that rewards users for being active
            on-chain. We use custom made algorithms to calculate CRED points
            which you can get by using DeFi platforms and holding certain NFTs.
            We’re currently supporting Aptos ecosystem and expanding on other
            chains soon. <br />
            <br />
            What to do with CRED points? We’ll reveal more information soon.
            Stay tuned and follow all the news on our&nbsp;
            <span className="text-third-default font-bold underline cursor-pointer">
              X account!
            </span>
          </p>
          <div
            className="mt-20 w-full py-12 flex flex-col justify-center items-center border border-gray-light-1 rounded-xl"
            style={{
              background:
                "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
            }}
          >
            <p className="text-base md:text-xl text-center">
              Want to know more?
              <br />
              Drop us a question or feedback on X!
            </p>
            <a href="https://x.com/0xcred" target="_blank">
              <PrimaryButton className="mt-8">
                <div className="flex gap-2">
                  <p className="">Ask us anything on</p>
                  <img src="/about/x.svg" alt="x" />
                </div>
              </PrimaryButton>
            </a>
          </div>
          <div className="mt-[138px]">
            <PrivacyPolicy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
