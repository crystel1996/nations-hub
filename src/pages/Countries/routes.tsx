import Countries from "@nations-hub/pages/Countries/Countries";
import { RouterInterface } from "@nations-hub/routes/interface";

export const COUNTRIES_ROUTE = (name?: string) => {

    if (name) {
        return `/countries?name=${name}`
    }
    return '/countries'
}

const CountriesRoute: RouterInterface[] = [
    {
        path: COUNTRIES_ROUTE(),
        element: <Countries />
    }
]

export default CountriesRoute;