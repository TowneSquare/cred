import { Link, useLocation } from "react-router-dom"
import MenuType from "../../type/menuType";

interface Props {
   data: MenuType
}
const Menu: React.FC<Props> = ({ data }) => {
   const location = useLocation();
   const isActive = location.pathname.includes(data.href);

   return (
      <Link to={data.href} className={`flex items-center "text-gray-light-2"}`}
         style={isActive ? {color: data.color}: {}}
      >
         <span className={`${isActive ? "font-bold" : ""} whitespace-nowrap`}>{data.label}</span>
      </Link>
   )
}

export default Menu;