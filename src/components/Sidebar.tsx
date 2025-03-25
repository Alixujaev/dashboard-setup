import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { MENU_ITEMS } from "../utils/consts";

const Sidebar = () => {
  const userRole = useSelector((state: RootState) => state.auth.role);

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        {MENU_ITEMS.map(
          (item) =>
            item.roles.includes(userRole as string) && (
              <li key={item.path} className="mb-4">
                <Link to={item.path} className="hover:text-gray-300">
                  {item.label}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
