import ReactDOM from "react-dom/client";
//ui
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
//redux
import { Provider } from "react-redux";
import store, { persistor } from "./features/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <NextUIProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </NextUIProvider>
  </>
);
