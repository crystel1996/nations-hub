import { fetchCountries } from "@nations-hub/store/action/country/fetchCountries.action";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CountryReducerStateInterface = {
    status: 'idle',
    error: null,
    countries: [],
    totalCountries: 0,
    page: 1,
    countriesPerPage: 5
}

const countriesSlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        nextCountryPage: (state) => {
          state.page += 1;
        },
        resetCountryPage: (state) => {
          state.page = 1;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCountries.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCountries.fulfilled, (state, action) => {
            state.status = 'success';
            state.countries = action.payload.countries;
            state.totalCountries = action.payload.totalCountries;
        })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload as any;
        });
    }
});

export const { nextCountryPage, resetCountryPage } = countriesSlice.actions;

export default countriesSlice.reducer;