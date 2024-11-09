import Country from "@nations-hub/pages/Country/Country";
import { RouterInterface } from "@nations-hub/routes/interface";

export const COUNTRY_ROUTE = () => {

    return '/country/:code'
}

export const COUNTRY_ROUTE_DINAMICALLY = (alpahCode: string) => {
    return `/country/${alpahCode}`;
}

const CountryRoute: RouterInterface[] = [
    {
        path: COUNTRY_ROUTE(),
        element: <Country />
    }
]

export default CountryRoute;