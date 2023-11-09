import Share from "../../../components/share";

const MyTotal = () => {
  const myPoint = "8,750";
  return (
    <div className="flex flex-col items-center bg-black">
      <h1 className="text-2xl md:text-3xl font-bold">MY TOTAL CRED POINTS</h1>
      <div
        className="relative mt-4 px-8 py-1 flex gap-2 justify-center items-center border-[3px] md:border-4 border-primary-default rounded-full "
        style={{
          background:
            "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
        }}
      >
        <p className="text-[38px] md:text-[57px] font-semibold">{myPoint}</p>
        <img src="/credpoints/cred.svg" alt="cred" className="w-9 md:w-[54px]" />
        <div className="absolute -right-16 md:-right-20">
          <Share />
        </div>
      </div>
      <p className="mt-4 text-center text-sm md:text-base">points are updated daily at 00:00 UTC</p>
    </div>
  );
};

export default MyTotal;
