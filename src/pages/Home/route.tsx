import Home from "@nations-hub/pages/Home/Home";
import { RouterInterface } from "@nations-hub/routes/interface";

const HomeRoute: RouterInterface[] = [
    {
        path: '/',
        element: <Home />
    }
]

export default HomeRoute;