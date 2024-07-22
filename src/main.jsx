import ReactDOM from "react-dom/client";
//ui
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
//redux
import { Provider } from "react-redux";
import store from "./features/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NextUIProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NextUIProvider>
  </>
);
