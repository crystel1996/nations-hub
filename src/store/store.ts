import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from './reducer/country/country.reducer'

const store = configureStore({
    reducer: {
        countries: CountriesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;