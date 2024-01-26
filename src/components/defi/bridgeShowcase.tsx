interface Props {
  Item1?: any;
  Item2?: any;
}
const BridgeShowcase: React.FC<Props> = ({ Item1, Item2 }) => {
  return (
    <div className="flex h-[26px] rounded-[50px] bg-white bg-opacity-10 items-center justify-between text-[#FFF] font-bold text-[14px] px-2 font-Inter mr-2">
      <div className="flex items-center">
        <img
          src={Item1.imgUrl}
          className="cursor-pointer w-[15px] h-[15px] mr-1"
        />
        <p>{Item1.text}</p>
      </div>
      <p className="mx-2">/</p>
      <div className="flex items-center">
        <img
          src={Item2.imgUrl}
          className="cursor-pointer w-[14.4px] h-[14.4px] mr-1"
        />
        <p>{Item2.text}</p>
      </div>
    </div>
  );
};

export default BridgeShowcase;
