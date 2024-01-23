import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="flex gap-10">
      <Link to={"/privacy"}>
        <p className="mb-8 text-sm md:text-base text-gray-light-1 hover:text-third-default cursor-pointer">
          Privacy policy
        </p>
      </Link>
      <Link to={"/tos"}>
        <p className="mb-8 text-sm md:text-base text-gray-light-1 hover:text-third-default cursor-pointer">
          Terms of service
        </p>
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
