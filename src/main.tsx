import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.tsx";
import { Wrapper } from "./Wrapper.tsx";

createRoot(document.getElementById("root")!).render(
  <Wrapper>
    <App />
  </Wrapper>
);
