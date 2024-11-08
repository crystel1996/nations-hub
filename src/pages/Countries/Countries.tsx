import Header from "@nations-hub/components/UI/Header/Header";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Countries/Constant/menu";
import { fetchCountries } from "@nations-hub/store/action/country/fetchCountries.action";
import { nextCountryPage } from "@nations-hub/store/reducer/country/country.reducer";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { AppDispatch } from "@nations-hub/store/store";
import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CountriesComponent from "@nations-hub/components/Countries/Countries";
import { Container } from "@mui/material";
import { CountriesComponentInterface } from "@nations-hub/components/Countries/interface";

const Countries = () => {

    const location = useLocation();
    const isApiFetchCalled = useRef<boolean>(false);

    const queryParams = new URLSearchParams(location.search);
    const countryName = queryParams.get('name');

    const dispatch = useDispatch<AppDispatch>();
    const getCountries: CountryReducerStateInterface = useSelector((state: any) => state.countries);

    useEffect(() => {
        const handleFetchCountries = () => {
            if(getCountries.status === 'idle') {
                isApiFetchCalled.current = true;
                dispatch(fetchCountries({page: getCountries.page, name: countryName ?? ''}));
            }
        }
        !isApiFetchCalled?.current && handleFetchCountries();
    }, [getCountries.page, dispatch, getCountries.status]);

    const loadMoreCountries = () => {
        dispatch(nextCountryPage());
    };

    const props: HeaderComponentInterface = {
        menus: MENU
    };

    const countries: CountriesComponentInterface['countries']  = useMemo(() => {
        return getCountries.countries.map((country) => {
            return {
                name: country?.name?.common,
                flag: country?.flags?.png,
                alpha3Code: country?.cca2,
                capital: country?.capital?.[0]
            }
        })
    }, [getCountries.countries]);

    return <>
        <Header menus={props.menus} />
        <Container>
            <CountriesComponent 
                loading={getCountries.status === 'loading'} 
                countries={countries} 
                onLoadMore={loadMoreCountries}
            />
        </Container>
    </>
}

export default Countries;