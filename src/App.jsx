import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import Services from "./pages/services/Services"
import Orders from "./pages/orders/Orderz"
import MyServices from "./pages/myservices/MyServices"
import Add from "./pages/add/Add"
import Messages from "./pages/messages/Messages"
import Message from "./pages/message/Message"
import Service from "./pages/service/Service"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import { ChakraProvider } from "@chakra-ui/react";
import { useUser } from "./contexts/AuthContext";
import { createContext } from "react";


import "./App.scss"


export const AuthContext = createContext(null);


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {

  const context = useUser();


  const Layout = () => {

    return (
      <div className="app">
         <AuthContext.Provider value={context}>
          <ScrollToTop />
        <Navbar />
        <Outlet />
        <Footer />
        </AuthContext.Provider>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/services",
        element: <Services/>
      },
      {
        path: "/service/:id",
        element: <Service/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/myservices",
        element: <MyServices/>
      },
      {
        path: "/add",
        element: <Add/>
      },
      {
        path: "/messages",
        element: <Messages/>
      },
      {
        path: "/message/:id",
        element: <Message/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      }
      ]
    },
  ]);

  return (
    <div>
          <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
    </div>
  )
}

export default App
