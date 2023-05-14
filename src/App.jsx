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
import "./App.scss"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
      {
        path: "/home",
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
      }
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
