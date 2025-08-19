import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice.jsx";
import themeReducer from "./features/theme.jsx";

import App from "./App.jsx";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
