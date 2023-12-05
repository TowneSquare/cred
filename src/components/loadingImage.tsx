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
      className={`bg-gray-dark-4 rounded-sm ${className}`}
      style={{ backdropFilter: "blur(20px)", width: width + "px", height: height + "px" }}
    >
      <img
        src={url}
        width={width}
        height={height}
        className="rounded-md"
        alt="nft"
        onLoad={onLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  );
};

export default LoadingImage;
