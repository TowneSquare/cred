import GlobalLink from "./globalLink";
import TwitterLink from "./twitterLink";

interface Props {
  imgUrl?: string;
  text?: string;
  text_sm?: string;
  twitterLink?: string;
  globalLink?: string;
}
const NftCollection: React.FC<Props> = ({ imgUrl, text, twitterLink, globalLink, text_sm }) => {
  return (
    <div className="flex justify-between md:w-[314px] h-[64px] items-center border-b-[1px] border-[#626262] mx-5">
      <div className="flex">
        <img
          src={imgUrl}
          className="w-6 h-6"
        />
        <div className="grid">
          <p className="text-4 font-[500] ml-2">{text}</p>
          {text_sm && <p className="text-[12px] font-[400] text-[#B9B9B9] ml-2">{text_sm}</p>}
        </div>
      </div>
      <div className="flex">
        <TwitterLink link={twitterLink} />
        <GlobalLink link={globalLink} />
      </div>
    </div>
  );
};

export default NftCollection;
