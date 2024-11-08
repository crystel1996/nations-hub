import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import HomeRoute from "@nations-hub/pages/Home/route";
import CountriesRoute from "@nations-hub/pages/Countries/routes";

const ROUTE: RouterInterface[] = [
    ...HomeRoute,
    ...CountriesRoute
];

export default createBrowserRouter(ROUTE as RouterInterface[]);