import { configureStore } from "@reduxjs/toolkit";
import CountryReducer from './reducer/country/country.reducer';
import CountriesReducer from './reducer/country/countries.reducer';

const store = configureStore({
    reducer: {
        countries: CountriesReducer,
        country: CountryReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;