interface Props {
  className?: string;
  onClick?: () => void;
  children?: any;
}
const LeaderboardTapItem: React.FC<Props> = ({ className, onClick: onChange, children }) => {
  return (
    <div
      className={`w-[50%] text-center text-[14px] text-[#F5E27D] h-12 flex flex-col justify-center items-center cursor-pointer ${className}`}
      onClick={onChange}
    >
      {children}
    </div>
  );
};

export default LeaderboardTapItem;
