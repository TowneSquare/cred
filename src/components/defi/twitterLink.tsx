interface Props {
  link?: string;
}
const TwitterLink: React.FC<Props> = ({ link }) => {
  return (
    <div className="w-8 h-8 rounded-full bg-[#303030] flex items-center justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src="/credpoints/twitter.svg"
          className="cursor-pointer w-[14px] h-[12.8px]"
        />
      </a>
    </div>
  );
};

export default TwitterLink;
