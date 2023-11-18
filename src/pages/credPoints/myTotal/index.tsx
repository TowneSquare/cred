import Share from "../../../components/share";
import { useAppSelector } from "../../../state/hooks";

const MyTotal = () => {
  const myPoint = useAppSelector(state => state.credpointsState.totalPoint);

  return (
    <div className="flex flex-col items-center bg-black">
      <h1 className="text-2xl md:text-3xl font-bold">MY TOTAL CRED POINTS</h1>
      <div
        className="container relative mt-4 px-8 py-1 w-auto flex gap-2 justify-center items-center border-[3px] md:border-4 border-primary-default rounded-full"
      >
        <p className="text-[38px] md:text-[57px] font-semibold">{myPoint.toLocaleString()}</p>
        <img src="/credpoints/cred.svg" alt="cred" className="w-9 md:w-[54px]" />
        <div className="absolute -right-16 md:-right-20">
          <Share />
        </div>
      </div>
      <p className="mt-4 text-center text-sm md:text-base">points are updated daily at 00:00 GMT</p>
    </div>
  );
};

export default MyTotal;
