interface Props {
  className?: string;
}
const LoadingState: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`h-9 bg-gray-dark-4 rounded-sm ${className}`}
      style={{ backdropFilter: "blur(20px)" }}
    ></div>
  );
};

export default LoadingState;
