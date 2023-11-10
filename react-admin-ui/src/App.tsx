import Home from "./pages/home/Home";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
  redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import GoogleLoginButton from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Users from "./pages/users/UserS";
import Product from "./pages/product/Product";
import Products from "./pages/products/ProductS";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

// Skeletal is grid system, with box classname:

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user") as string;
    if (storedUser !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [user]);

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <GoogleLoginButton />,
    },

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/user/:id",
          element: <User />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// conditional logic if == ?, then <component>, else Navigate to </>
// in conditional routing, always use Navigate to "/link" as else instead of passive <component> like jsx stuff.

// JSON.parse(localStorage.getItem("user") as string).data.email ==
// null ?

{
  /* <Navigate to : "/" /> */
}
