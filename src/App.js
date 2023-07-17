import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
               element: <Body/>,
            },
            {
            path: "/about",
            element: <About/>,
        },
        {
           path: "/help",
           element: <Help />
        },
        {
             path: "/Cart",
             element: <Cart/>
        },
        {
            path: "/restaurants/:resId",
            element: <RestaurantMenu/>
        }
    ],
        errorElement: <Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);

