import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Link to={"/privacy"}>
      <p className="mt-20 text-gray-light-1 hover:text-third-default cursor-pointer">Privacy policy</p>
    </Link>
  );
};

export default PrivacyPolicy;
