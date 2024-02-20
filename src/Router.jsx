import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Homepage from "./Pages/Homepage/Homepage"

function Rout() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Homepage />
        }
    ])
    return <RouterProvider router={router} />
}

export default Rout