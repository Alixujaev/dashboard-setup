import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <StrictMode>{children}</StrictMode>
      </Provider>
    </BrowserRouter>
  );
};
