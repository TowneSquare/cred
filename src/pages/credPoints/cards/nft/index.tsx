const LongestNft = () => {
  return (
    <div
      className="py-6 w-[320px] flex flex-col justify-center items-center border border-gray-light-2 rounded-xl"
      style={{
        background:
          "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
      }}
    >
      <div className="flex items-center gap-2">
        <img src="/credpoints/longestNft.svg" alt="swap" />
        <p className="text-2xl font-bold">Bruh Bear #8932</p>
      </div>
      <p className="mt-4 text-center">is your longest-hodling NFT</p>
    </div>
  );
};

export default LongestNft;
