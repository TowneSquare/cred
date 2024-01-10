import { useAppSelector } from "../../../state/hooks";

const PointLogo = () => {
  const defiPoint = useAppSelector((state) => state.credpointsState.defiPoint);
  const visitorMode = useAppSelector((state) => state.globalState.visitorMode);

  return (
    <div
      className="px-8 py-1 flex gap-2 justify-center items-center border-[3px] md:border-4 border-primary-default rounded-full "
      style={{
        background:
          "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
      }}
    >
      <p className="text-[32px] md:text-[48px] font-semibold">{visitorMode ? "???" : defiPoint.toLocaleString()}</p>
      <img src="/credpoints/cred.svg" alt="cred" className="w-9 md:w-[54px]" />
    </div>
  );
};

export default PointLogo;
