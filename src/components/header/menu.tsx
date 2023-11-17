import { Link, useLocation } from "react-router-dom";
import MenuType from "../../type/menuType";
import { useRef } from "react";

interface Props {
  data: MenuType;
}
const Menu: React.FC<Props> = ({ data }) => {
  const ref = useRef(null);
  const location = useLocation();
  const isActive = location.pathname.includes(data.href);
  const color = isActive ? data.color : "#5F5F5F";

  const onMouseEnter = () => {
    const element: any = ref.current;
    element.style.color = data.color;
  };
  const onMouseLeave = () => {
    const element: any = ref.current;
    element.style.color = color;
  };
  return (
    <Link
      to={data.href}
      className={`flex items-center ${
        isActive ? "font-bold" : ""
      } hover:font-bold whitespace-nowrap`}
      style={{ color }}
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={(e) => onMouseLeave()}
      ref={ref}
    >
      {data.label}
    </Link>
  );
};

export default Menu;
