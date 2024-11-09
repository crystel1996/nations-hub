import { createBrowserRouter } from "react-router-dom";
import { RouterInterface } from "./interface";
import HomeRoute from "@nations-hub/pages/Home/route";
import CountriesRoute from "@nations-hub/pages/Countries/routes";
import CountryRoute from "@nations-hub/pages/Country/routes";

const ROUTE: RouterInterface[] = [
    ...HomeRoute,
    ...CountriesRoute,
    ...CountryRoute
];

export default createBrowserRouter(ROUTE as RouterInterface[]);