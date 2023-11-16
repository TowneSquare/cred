import Logo from "../home/logo";
import Cards from "../credPoints/cards";
import MyRanking from "./myRanking";
import MyTotal from "./myTotal";

const Twitter = () => {
  return (
    <div className="relative w-full flex justify-center z-10">
      <div className="w-full md:w-[1000px] px-4 md:px-0 flex flex-col items-center mt-20 mb-10">
        <Logo />
        <div className="mt-20 flex gap-10">
          <MyTotal />
          <MyRanking />
        </div>
        <p className="mt-10 text-3xl font-bold">FUN FACTS</p>
        <Cards />
        
      </div>
    </div>
  );
};

export default Twitter;
