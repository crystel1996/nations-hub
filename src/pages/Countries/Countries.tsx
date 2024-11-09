import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Countries/Constant/menu";
import { fetchCountries } from "@nations-hub/store/action/country/fetchCountries.action";
import { nextCountryPage } from "@nations-hub/store/reducer/country/country.reducer";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { AppDispatch } from "@nations-hub/store/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CountriesComponent from "@nations-hub/components/Countries/Countries";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { Box } from "@mui/material";
import { CountryStyle } from "@nations-hub/pages/Countries/CountryStyle";
import { FetchAllCountriesDataInterface } from "@nations-hub/store/action/country/interface";

const Countries = () => {

    const location = useLocation();
    const isApiFetchCalled = useRef<boolean>(false);

    const queryParams = new URLSearchParams(location.search);
    const countryName = queryParams.get('name');

    const [listCountries, setListCountries] = useState<CountriesComponentInterface['countries']>([]);

    const dispatch = useDispatch<AppDispatch>();
    const getCountries: CountryReducerStateInterface = useSelector((state: any) => state.countries);

    useEffect(() => {
        const handleFetchCountries = () => {
            isApiFetchCalled.current = true;
            if (getCountries.status === 'idle') {
                dispatch(fetchCountries({}));
            }
            
        }
        !isApiFetchCalled?.current && handleFetchCountries();
    }, [getCountries.page, dispatch, getCountries.status]);

    useEffect(() => {
        const handleFilterCountries = () => {

            let countries: FetchAllCountriesDataInterface[] = [];

            if (countryName) {
                getCountries.countries.forEach((country) => {
                    if (country?.name?.common?.includes(countryName)) {
                        countries.push(country);
                    }
                });
    
            } else {
                countries = getCountries.countries;
            }

            const lists = countries.map((country) => {
                return {
                    name: country?.name?.common,
                    flag: country?.flags?.png,
                    alpha3Code: country?.cca2,
                    capital: country?.capital?.[0]
                }
            });
            setListCountries(lists);
        };
        handleFilterCountries();
    }, [getCountries.countries, countryName]);

    const loadMoreCountries = () => {
        dispatch(nextCountryPage());
    };

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    return <MainLayout menus={props.menus}>
        <Box sx={CountryStyle.content}>
            <CountriesComponent 
                loading={getCountries.status === 'loading'} 
                countries={listCountries} 
                onLoadMore={loadMoreCountries}
            />
        </Box>
    </MainLayout>
}

export default Countries;