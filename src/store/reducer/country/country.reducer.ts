import { fetchCountry } from "@nations-hub/store/action/country/fetchCountry.action";
import { CountryReducerStateInterface } from "@nations-hub/store/reducer/country/interface";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CountryReducerStateInterface = {
    status: 'idle',
    error: null,
    country: null
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(fetchCountry.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCountry.fulfilled, (state, action) => {
            state.status = 'success';
            state.country = action.payload;
        })
        .addCase(fetchCountry.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload as any;
        })

    }
});

export default countrySlice.reducer;