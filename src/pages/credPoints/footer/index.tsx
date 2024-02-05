import { Link } from "react-router-dom";
import { Menus } from "../../../components/header";
import Menu from "../../../components/header/menu";
import PrimaryButton from "../../../components/primaryButton";
import JoinUs from "../../../components/header/joinus";

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <div className="flex flex-col items-center mb-8 md:mt-8 md:mb-16">
        <p className="text-[28px] md:text-[32px] font-bold">
          BACKED BY
        </p>
        <div className="flex justify-between w-[244px] md:w-[331px] mt-12">
          <img src="/credpoints/footer/bixin.svg" className="w-[60px] h-[60px] md:w-20 md:h-20" />
          <img src="/credpoints/footer/aptos.svg" className="w-[152px] md:w-[200px]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full md:h-[382px] border-t border-white border-opacity-92 bg-[#121212]">
        <div className="flex flex-col w-full md:w-[1000px] mt-12 px-4">
          <div className="flex">
            <img src="/logo.svg" alt="cred" className="w-[123px] md:w-[158px] md:w-auto" />
            <img src="/logo_season01.svg" alt="cred" className="w-[123px] md:w-[158px] md:w-auto ml-4" />
          </div>
          <div className="grid md:flex md:justify-between my-[50px]">
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-bold mb-4">Cred</p>
              <Link to={"/credPoints"}>
                <p className="text-base text-[#B9B9B9] hover:text-third-default cursor-pointer">
                  Cred points
                </p>
              </Link>
              <Link to={"/leaderboard"}>
                <p className="text-base text-[#B9B9B9] hover:text-third-default cursor-pointer">
                  Leaderboard
                </p>
              </Link>
              <Link to={"/about"}>
                <p className="text-base text-[#B9B9B9] hover:text-third-default cursor-pointer">
                  About
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-2 my-12 md:my-0">
              <p className="text-[20px] font-bold mb-4">Legal info</p>
              <Link to={"/privacy"}>
                <p className="text-base text-[#B9B9B9] hover:text-third-default cursor-pointer">
                  Privacy
                </p>
              </Link>
              <Link to={"/tos"}>
                <p className="text-base text-[#B9B9B9] hover:text-third-default cursor-pointer">
                  Terms of service
                </p>
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-bold mb-4">Follow us</p>
              <div className="flex gap-6 items-center">
                <div className="flex justify-center items-center rounded-full border border-[#5A5A5A] w-[56px] h-[56px]">
                  <a
                    href={`https://twitter.com/0xcred`}
                    target="_blank"
                    className="w-6"
                  >
                    <img src="/credpoints/twitter.svg" alt="X" className="w-[28px]" />
                  </a>
                </div>
                <div className="flex justify-center items-center rounded-full border border-[#5A5A5A] w-[56px] h-[56px]">
                  <a
                    href={`https://discord.gg/bK5p9tNM4d`}
                    target="_blank"
                    className="w-6"
                  >
                    <img src="/credpoints/discord.svg" alt="discord" className="w-[27px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[18px] font-normal text-[#B9B9B9] mb-6 text-center md:text-left">© 2024 eTown Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
