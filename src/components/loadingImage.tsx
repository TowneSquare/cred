import { useState } from "react";

interface Props {
  width?: number;
  height?: number;
  className?: string;
  url?: string;
}
const LoadingImage: React.FC<Props> = ({ className, url, width, height }) => {
  const [isLoading, toggleLoading] = useState(true);

  function onLoad() {
    toggleLoading(false);
  }
  return (
    <div
      className={`${
        isLoading ? "bg-gray-dark-4 backdrop-blur-lg" : ""
      } rounded-md ${className}`}
    >
      <img
        src={url}
        className="rounded-md"
        alt="nft"
        onLoad={onLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default LoadingImage;
