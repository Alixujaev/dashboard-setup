import { Route, Routes } from "react-router-dom";
import PublicRoutes from "./routes/publicRoutes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoutes from "./routes/privateRoutes";
import NotFound from "./pages/NotFound";
import Redirect from "./routes/redirect";
import { MENU_ITEMS } from "./utils/consts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Redirect />} />
      {/* Public Routes */}
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        {MENU_ITEMS.map((item) => (
          <Route key={item.path} path={item.path} element={<item.element />} />
        ))}
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
