import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Home from "../pages/Home";
/* import Profile from '../pages/Profile';
import Signup from '../pages/Signup'
import Booking from '../pages/Booking'; */

import Root from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/home',
        element: <Root/>,
        children: [
            {
                path:'/home',
                element: < Home/>
            }, 
            /* {
                path:'/signup',
                element: <Signup/>
            }, 
            {
                path:'/booking',
                element: <Booking/>
            }, 
            {
                path:'/profile',
                element: <Profile/>
            },  */
    ]
}
])

export default router