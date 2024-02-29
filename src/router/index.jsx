import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Home from "../pages/Home";
import Profile from '../pages/Profile';
import Signup from '../pages/Signup' 
import Favorite from "../pages/Favorite";
import Accommodation from '../pages/Accommodation'; 

import Root from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
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
                path:'home/profile',
                element: <Profile/>
            }
    ]
}
])

export default router