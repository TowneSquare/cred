const LiquidSwap = () => {
  return (
    <div
      className="py-6 w-[320px] flex flex-col justify-center items-center border border-gray-light-2 rounded-xl"
      style={{
        background:
          "linear-gradient(94.74deg, rgba(255, 255, 255, 0.14) 16.43%, rgba(255, 255, 255, 0) 108.74%)",
      }}
    >
      <div className="flex items-center gap-2">
        <img src="/credPoints/liquidSwap.svg" alt="swap" />
        <p className="text-2xl font-bold">Liquidswap</p>
      </div>
      <p className="mt-4 text-center">is the DeFi platform<br/> that you like the most</p>
    </div>
  );
};

export default LiquidSwap;
