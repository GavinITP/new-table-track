import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/noto-sans-thai";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./state";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./state/api.ts";

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans Thai Variable', sans-serif`,
    body: `'Noto Sans Thai Variable', sans-serif`,
  },
});

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});

setupListeners(store.dispatch);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
  // </React.StrictMode>
);
