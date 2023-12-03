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
import LoginComponent from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import Users from "./pages/users/UserS";
import Product from "./pages/product/Product";
import Products from "./pages/products/ProductS";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Project from "./pages/project/Project";

const queryClient = new QueryClient();

// Skeletal is grid system, with box classname:

// GO FUCK buggy react context,, use java old style for auth/
const App = () => {
  console.log("Hello from App");
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user") as string;
    if (storedUser !== null) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [user, redirect]);

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
      element: user ? <Navigate to="/" /> : <LoginComponent />,
    },

    {
      path: "/",
      element: user ? <Layout /> : <Navigate to="login" />,
      children: [
        {
          path: "/",
          element: user ? <Home /> : <Navigate to="login" />,
        },
        {
          path: "/engine",
          element: user ? <Users /> : <Navigate to="login" />,
        },
        {
          path: "/products",
          element: user ? <Products /> : <Navigate to="login" />,
        },
        {
          path: "/user/:id",
          element: user ? <User /> : <Navigate to="login" />,
        },
        {
          path: "/project",
          element: user ? <Project /> : <Navigate to="login" />,
        },
        {
          path: "/product/:id",
          element: user ? <Product /> : <Navigate to="login" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// conditional logic user ?, then <component>, else Navigate to = string </>
// in conditional routing, always use Navigate to "/link" as else instead of passive <component> like jsx stuff.

// JSON.parse(localStorage.getItem("user") as string).data.email ==
// null ?

{
  /* <Navigate to : "/" /> */
}
