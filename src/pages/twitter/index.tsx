import Logo from "../home/logo";
import Cards from "../credPoints/cards";
import MyRanking from "./myRanking";
import MyTotal from "./myTotal";

import { Helmet } from "react-helmet-async";

const Twitter = () => {
  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nytimes" />
        <meta name="twitter:creator" content="@SarahMaslinNir" />
        <meta
          name="og:title"
          content="Cred"
        />
        <meta name="og:description" content="Cred is a loyalty points system that rewards users for being active
    on-chain. We use custom made algorithms to calculate CRED points
    which you can get by using DeFi platforms and holding certain NFTs.
    We’re currently supporting Aptos ecosystem and expanding on other
    chains soon." />
        <meta
          name="og:image"
          content="https://cred-beta.vercel.app/leaderboard/effect1.png"
        />
      </Helmet>
      <div className="relative w-full flex justify-center z-10">
        <div className="w-full md:w-[1000px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
          <Logo />
          <div className="mt-20 flex flex-col md:flex-row gap-10">
            <MyTotal />
            <MyRanking />
          </div>
          <p className="mt-10 text-3xl font-bold">FUN FACTS</p>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Twitter;
