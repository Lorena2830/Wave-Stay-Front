import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup' 
import Favorite from "../pages/Favorite/Favorite";
import Accommodation from '../pages/Accommodation'; 
import Booking from "../pages/Booking/Booking";
import SocialNetwork from "../pages/SocialNetwork/SocialNetwork";
import Inicio from "../pages/Inicio/Inicio";

import Root from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Inicio />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path:'/signup',
        element: <div id= 'signupStyle'><Signup/></div>
    },
    {
        path: '/home',
        element: <Root/>,
        children: [
            {
                path:'/home',
                element: <Home/>
            }, 
            {
                path:'/home/accommodation/:accommodationId',
                element: <Accommodation/>
            },
             
            {
                path:'/home/favorite',
                element: <Favorite/>
            }, 
            {
                path:'/home/profile',
                element: <div id='profile'><Profile/></div> 
            },
            {
                path:'/home/booking',
                element: <Booking/>
            },
            {
                path:'/home/socialNetwork',
                element: <SocialNetwork/>
            }
    ]
}
])

export default router