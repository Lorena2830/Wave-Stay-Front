import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Accommodation from "../pages/Accommodation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/accommodation',
        element: <Accommodation/>,
        children: [
           /*  {
                path:'/accommodation',
                element: <Accommodation/>
            }, */
    ]
}
])

export default router