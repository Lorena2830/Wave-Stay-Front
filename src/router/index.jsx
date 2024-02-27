import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Accommodation from "../pages/Accommodation";
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
        path: '/accommodation',
        element: <Root/>,
        children: [
            {
                path:'/accommodation',
                element: <Accommodation/>
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