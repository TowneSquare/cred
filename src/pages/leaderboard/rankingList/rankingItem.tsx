import { RankingType } from "../../../type/rankingType";

interface Props {
  data: RankingType;
  index: number;
}

const RankingItem: React.FC<Props> = ({ data, index }) => {
  const ranking = index + 1;
  let bgColor = undefined,
    borderColor = undefined;
  switch (ranking) {
    case 1:
      bgColor = "#FFF5BD";
      borderColor = "#D4B341";
      break;
    case 2:
      bgColor = "#B9B9B9";
      borderColor = "#F7F7F7";
      break;
    case 3:
      bgColor = "#E77F44";
      borderColor = "#FFC19D";
      break;
  }

  return (
    <>
      <div
        className="px-6 md:px-8 py-4 md:py-6 flex justify-between"
        style={index % 2 == 1 ? { background: "#FFFFFF0D" } : {}}
      >
        <div className="flex gap-2">
          <div
            className={`w-8 flex justify-center items-center rounded-md`}
            style={
              ranking <= 3
                ? { background: bgColor, border: `2px solid ${borderColor}` }
                : {}
            }
          >
            <p className="text-base md:text-lg text-gray-light-1">{ranking}</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={`https://source.boringavatars.com/marble/120/${data.wallet}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51
              `}
              className="w-8 h-8"
              alt="avatar"
            />
            <p className="hidden md:block text-base md:text-lg font-bold">
              {data.wallet.slice(0, 12)}...{data.wallet.slice(-10)}
            </p>
            <p className="md:hidden text-base md:text-lg font-bold">
              {data.wallet.slice(0, 5)}...{data.wallet.slice(-3)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="text-base md:text-lg">
            {data.totalPoint.toLocaleString()}
          </p>
          <img
            src="/credpoints/cred.svg"
            className="w-6 h-6 md:w-8 md:h-8"
            alt="cred"
          />
        </div>
      </div>
      <div className="w-full h-px border border-gray-light-1" />
    </>
  );
};

export default RankingItem;
