export const Title = ({ children }: { children: any }) => {
  return (
    <p className="text-base md:text-xl font-bold pt-[37px] pb-3">{children}</p>
  );
};

export const Content = ({ children }: { children: any }) => {
  return <p className="text-xs md:text-sm">{children}</p>;
};

export const Space = () => {
  return <div className="h-3" />;
};
