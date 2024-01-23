const JoinUs = () => {
  return (
    <div className="flex gap-6 items-center">
      <a
        href={`https://twitter.com/0xcred`}
        target="_blank"
        className="w-6"
      >
        <img src="/credpoints/twitter.svg" alt="X" className="w-9 md:w-[54px]" />
      </a>
      <a
        href={`https://discord.gg/bK5p9tNM4d`}
        target="_blank"
        className="w-8"
      >
        <img src="/credpoints/discord.svg" alt="discord" className="w-9 md:w-[54px]" />
      </a>
    </div>
  );
};

export default JoinUs;
