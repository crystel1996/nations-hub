import Home from "@nations-hub/pages/Home/Home";
import { RouterInterface } from "@nations-hub/routes/interface";

export const HOME_ROUTE = '/';

const HomeRoute: RouterInterface[] = [
    {
        path: HOME_ROUTE,
        element: <Home />
    }
]

export default HomeRoute;