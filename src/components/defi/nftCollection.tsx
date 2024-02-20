import GlobalLink from "./globalLink";
import TwitterLink from "./twitterLink";
import { Tooltip, Typography } from "@material-tailwind/react";

interface Item {
  descr: string;
  price: string;
}

interface Section {
  title: string;
  items: Item[];
}
interface Props {
  imgUrl?: string;
  text?: string;
  text_sm?: string;
  twitterLink?: string;
  globalLink?: string;
  tipData?: Section[];
}

const NftCollection: React.FC<Props> = ({ imgUrl, text, twitterLink, globalLink, text_sm, tipData }) => {
  return (
    <div className="flex justify-between md:w-[314px] h-[64px] items-center border-b-[1px] border-[#626262] mx-5">
      <div className="flex">
        <img
          src={imgUrl}
          className="w-6 h-6 rounded-full"
        />
        <div className="grid">
          <p className="text-4 font-[500] mx-2">{text}</p>
          {text_sm && <p className="text-[12px] font-[400] text-[#B9B9B9] ml-2">{text_sm}</p>}
        </div>
        {tipData &&
          <Tooltip
            content={
              <div className="w-fit h-fit p-4 border border-[#626262] rounded-[4px]">
                {tipData && tipData.map((section, index) => (
                  <div key={index} className="">
                    <Typography color="white" className="font-normal text-[#B9B9B9] text-[13px]">
                      <p className="mb-2">
                        {section.title}
                      </p>
                    </Typography>
                    <Typography variant="small" color="white" className="font-normal">
                      <div className="flex-col gap-2">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-center">
                            <p className="text-[13px] mr-2">{item.descr}</p>
                            <p className="text-[13px] flex text-[#B9B9B9]">
                              {item.price}
                              <img className="w-[14px] mx-1" src="/credpoints/cred.svg" alt="copy" />/day
                            </p>
                          </div>
                        ))}
                      </div>
                    </Typography>
                  </div>
                ))}
              </div>
            }
          >
            <img src={"./credpoints/question_tip.svg"} className="w-5 h-5" />
          </Tooltip>
        }
      </div>
      <div className="flex">
        <TwitterLink link={twitterLink} />
        <GlobalLink link={globalLink} />
      </div>
    </div >
  );
};

export default NftCollection;
