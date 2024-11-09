import { FetchAllCountriesInterface } from "@nations-hub/store/action/country/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk<
  FetchAllCountriesInterface['response'],
  FetchAllCountriesInterface['argument'],
  FetchAllCountriesInterface['failure']
>(
    'countries/fetchCountries',
    async (_, { rejectWithValue }) => {
      try {
        const api = `${import.meta.env.VITE_FETCH_ALL_COUNTRIES}`;
        const response = await fetch(api);
        const data = await response.json();
        return { countries: data, totalCountries: data.length };
      } catch (error: any) {
        return rejectWithValue(error?.message);
      }
    }
  );