interface Props {
  className?: string;
  onClick?: () => void;
  children?: any;
}
const PrimaryButton: React.FC<Props> = ({ className, onClick: onChange, children }) => {
  return (
    <button
      className={`text-black font-semibold bg-primary-default hover:bg-primary-light active:bg-primary-dark rounded-full px-4 py-2 md:px-8 md:py-4 ${className}`}
      onClick={onChange}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
