//pages (element) import
import Home from '../pages/Home'
import Home2 from '../pages/Home2'

// router import
const {createBrowserRouter}  = require("react-router-dom");

// create router
const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/1",
        element: <Home2/>
    }
])

export default router;