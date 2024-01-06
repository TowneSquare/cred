interface Props {
  className?: string;
  onClick?: () => void;
  children?: any;
}
const ConnectedButton: React.FC<Props> = () => {
  return (
    <button className="w-full md:w-[200px] h-[56px] py-3 px-8 rounded-[200px] border border-[#52BDB2] text-[#52BDB2] text-opacity-70 font-bold text-[16px] text-center">
      <img src="/credpoints/success.svg" className="w-[24px] h-[24px] inline-block" alt="cred" /> Connected
    </button>
  );
};

export default ConnectedButton;
