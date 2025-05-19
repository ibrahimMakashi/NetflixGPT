import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import LogIn from "./components/LogIn";
import Browser from "./components/Browser";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";
import Home from "./components/Home";
import GPT from "./components/GPT";

function App() {
  const routerApp = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <LogIn />,
        },
        {
          path: "/browse",
          element: <Browser />,
          children:[
            {
              path:'/browse',
              element:<Home/>
            },
            {
              path:'/browse/gpt',
              element:<GPT/>
            }
          ]
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={routerApp}></RouterProvider>
    </Provider>
  );
}

export default App;
