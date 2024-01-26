interface Props {
  link?: string;
}
const GlobalLink: React.FC<Props> = ({ link }) => {
  return (
    <div className="ml-4 w-8 h-8 rounded-full bg-[#303030] flex items-center justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="/credpoints/global.svg"
          className="cursor-pointer w-6 h-6"
        />
      </a>
    </div>
  );
};

export default GlobalLink;
