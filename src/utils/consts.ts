import Dashboard from "../pages/Dashboard";
import Settings from "../pages/Settings";
import Users from "../pages/Users";


export const MENU_ITEMS = [
  { path: "/dashboard", element: Dashboard, label: "Dashboard", roles: ["admin", "manager", "editor"] },
  { path: "/users", element: Users, label: "Users", roles: ["admin", "manager"] },
  { path: "/settings", element: Settings, label: "Settings", roles: ["admin"] },
];

export const ROLE_BASED_ACCESS: Record<string, string[]> = Object.fromEntries(
  MENU_ITEMS.map(({ path, roles }) => [path, roles])
);
