import Share from "../../../components/share";

const MyTotal = () => {
  const myPoint = "8,750";
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">MY TOTAL CRED POINTS</h1>
      <div
        className="relative mt-4 px-8 flex gap-2 justify-center items-center border-4 border-primary-default rounded-full "
        style={{
          background:
            "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
        }}
      >
        <p className="text-[57px] font-semibold">{myPoint}</p>
        <img src="/credpoints/cred.svg" alt="cred" />
        <div className="absolute -right-20">
          <Share />
        </div>
      </div>
      <p className="mt-4 text-center">points are updated daily at 00:00 UTC</p>
    </div>
  );
};

export default MyTotal;
