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
    argument: {  page: number, name?: string},
    failure: {  rejectValue: string}
}