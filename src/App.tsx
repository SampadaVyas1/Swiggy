import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HeroBanner from "./view/HeroBanner/HeroBanner";
import { RouterProvider } from "react-router-dom";
import { approutes } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={approutes}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
