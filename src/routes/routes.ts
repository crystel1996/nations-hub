import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import HomeRoute from "@nations-hub/pages/Home/route";

const ROUTE: RouterInterface[] = [
    ...HomeRoute,
];

export default createBrowserRouter(ROUTE as RouterInterface[]);