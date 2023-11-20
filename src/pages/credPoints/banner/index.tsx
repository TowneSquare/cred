import PrimaryButton from "../../../components/primaryButton";

const Banner = () => {
  return (
    <div className="w-full px-4">
      <div
        className="container relative mt-8 pb-4 md:pb-0 w-full flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center border border-[#f9bffeeb] rounded-xl bg-black"
        style={{
          background:
            "linear-gradient(92deg, rgba(170, 114, 180, 0.44) 0%, rgba(107, 55, 172, 0.44) 111.54%)",
        }}
      >
        <div className="px-4 md:px-12 flex flex-col justify-center gap-4">
          <p className="text-3xl font-bold">How to earn more points?</p>
          <p className="text-sm font-bold">
            Cred is made by TowneSquare and integrated natively on the
            TowneSquare mobile app.
            <br />
            <br />
            TowneSquare is launching soon.
            <br />
            <br />
            Sign up on our Waitlist to earn early adopter points when the app
            launches!
          </p>
          <div className="w-full md:w-auto">
            <a href="https://www.townesquare.xyz/" target="_blank">
              <PrimaryButton className="w-full md:w-auto ">
                Check out TowneSquare
              </PrimaryButton>
            </a>
          </div>
        </div>
        <img src="/credpoints/overlay.svg" alt="overlay" />
        <img
          src="/credpoints/ts_phone@2x.png"
          alt="mobile"
          className="absolute w-[247px] left-auto right-auto -top-5  bottom-auto md:top-auto md:right-20 md:-bottom-0.5"
        />
      </div>
    </div>
  );
};

export default Banner;
