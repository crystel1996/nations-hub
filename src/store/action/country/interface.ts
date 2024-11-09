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

export interface FetchCountryDetailInterface {
    name: {
        common: string;
    };
    capital: string[];
    flags: {
        png: string;
    };
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        }
    };
    region: string;
    subregion: string;
    languages: {
        [key: string]: string;
    };
    latlng: number[];
    area: number;
    demonyms: {
        eng: {
            [key: string]: string;
        }
    };
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    population: number;
    timezones: string[];
    continents: string[];
    capitalInfo: {
        latlng: number[]
    }
}

export type FetchAllCountriesInterface = {
    response: { countries: FetchAllCountriesDataInterface[]; totalCountries: number },
    argument?: any,
    failure: {  rejectValue: string}
}

export interface FetchCountryInterface {
    response: FetchCountryDetailInterface[];
    argument: { alphaCode: string };
    failure: { rejectValue: string };
}