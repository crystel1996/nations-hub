import { Container } from "@mui/material";
import MainLayout from "@nations-hub/components/Layout/MainLayout/MainLayout";
import { HeaderComponentInterface } from "@nations-hub/components/UI/Header/interface";
import MENU from "@nations-hub/pages/Country/Constant/menu";
import CountryStyle from "@nations-hub/pages/Country/CountryStyle";
import { CountryInterface } from "@nations-hub/pages/Country/interface";
import { FC, useEffect, useMemo } from "react";
import CountryComponent from "@nations-hub/components/Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@nations-hub/store/store";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { fetchCountry } from "@nations-hub/store/action/country/fetchCountry.action";
import { useNavigate, useParams } from "react-router-dom";
import { COUNTRIES_ROUTE } from "@nations-hub/pages/Countries/routes";
import { CountryComponentInterface } from "@nations-hub/components/Country/interface";

const Country: FC<CountryInterface> = () => {

    const navigate = useNavigate();
    const { code } = useParams<{ code: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const getCountry: CountryReducerStateInterface = useSelector((state: RootState) => state.country);

    useEffect(() => {

        const handleFetchCountries = () => {

            if (!code) {
                navigate(COUNTRIES_ROUTE());
                return;
            }

            if (getCountry.status === 'idle' && code) {
                dispatch(fetchCountry({
                    alphaCode: code
                }));
            }
            
        }
        handleFetchCountries();
    }, [dispatch, getCountry.status, code]);

    const headerProps: HeaderComponentInterface = {
        menus: MENU
    };

    const countryComponentProps: CountryComponentInterface = useMemo(() => {

        const country = getCountry.country?.[0];
        
        let currency: CountryComponentInterface['currency'] = '';
        Object.keys(country?.currencies ?? {}).forEach((currencyKey) => {
            currency += `${country?.currencies?.[currencyKey]?.name ?? ''} ${country?.currencies?.[currencyKey]?.symbol ? `(${country?.currencies[currencyKey]?.symbol})`: ''}`
        });

        let resident: CountryComponentInterface['resident'] = '';
        Object.keys(country?.demonyms?.eng ?? {}).forEach((demonym) => {
            resident += `${demonym ? `(${demonym}):`: ''} ${country?.demonyms?.eng?.[demonym] ?? ''}  `;
        });

        let language: CountryComponentInterface['language'] = '';
        Object.keys(country?.languages ?? {}).forEach((item, index) => {
            if (index === 0) {
                language += `${country?.languages?.[item] ?? ''}  `;
            } else {
                language += `, ${country?.languages?.[item] ?? ''}  `;
            }
            
        });

        return {
            flag: {
                link: country?.flags?.png ?? '',
                alt: country?.name?.common ?? ''
            },
            name: country?.name?.common ?? '-',
            continents: country?.continents?.[0] ?? '-',
            population: country?.population ?? 0,
            area: `${country?.area ?? 0} km²`,
            region: country?.region ?? '-',
            subregion: country?.subregion ?? '-',
            currency: currency,
            resident,
            language,
            capital: country?.capital?.[0] ?? '',
            loading: getCountry.status === 'loading'
        }
    }, [getCountry.country, getCountry.status]);

    return <MainLayout {...headerProps}>
        <Container sx={CountryStyle.container}>
            <CountryComponent {...countryComponentProps} />
        </Container>
    </MainLayout>
}

export default Country;