export interface FetchAllCountriesDataInterface {
    name: {
        common: string;
    };
    capital: string[];
    flags: {
        png: string;
    };
    cca2: string;
}

export type FetchAllCountriesInterface = {
    response: { countries: FetchAllCountriesDataInterface[]; totalCountries: number },
    argument?: any,
    failure: {  rejectValue: string}
}