import { useNavigate } from "react-router-dom";
import { RankingType } from "../../../type/rankingType";
import { getBoringAvatar } from "../../../util/boringAvatar";

interface Props {
  data: RankingType;
  index: number;
}

const RankingItem: React.FC<Props> = ({ data, index }) => {
  const navigate = useNavigate();

  const ranking = index + 1;
  let bgColor = undefined,
    borderColor = undefined,
    textColor = undefined;
  switch (ranking) {
    case 1:
      bgColor = "#FFF5BD";
      borderColor = "#D4B341";
      textColor = "#6D5C06";
      break;
    case 2:
      bgColor = "#B9B9B9";
      borderColor = "#F7F7F7";
      textColor = "#484747";

      break;
    case 3:
      bgColor = "#E77F44";
      borderColor = "#FFC19D";
      textColor = "#5F2809";

      break;
  }

  return (
    <a
      href={`https://explorer.aptoslabs.com/account/${data.wallet}/transactions?network=mainnet`}
      target="_blank"
      className="group"
    >
      <div
        className={`px-6 md:px-8 py-4 md:py-6 flex justify-between ${
          index % 2 == 1 ? "bg-[#FFFFFF0D]" : ""
        } hover:bg-gray-light-1`}
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
            <p
              className="text-base md:text-lg text-gray-light-5"
              style={ranking <= 3 ? { color: textColor } : {}}
            >
              {ranking}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={getBoringAvatar(data.wallet)}
              className="w-8 h-8"
              alt="avatar"
            />
            <p className="hidden md:block text-base md:text-lg font-bold">
              {data.wallet.slice(0, 12)}...{data.wallet.slice(-10)}
            </p>
            <p className="md:hidden text-base md:text-lg font-bold">
              {data.wallet.slice(0, 4)}...{data.wallet.slice(-2)}
            </p>
            <img
              src="/credpoints/external_link.svg"
              className="hidden group-hover:block w-[16px] h-[16px]"
              alt="cred"
            />
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
    </a>
  );
};

export default RankingItem;
