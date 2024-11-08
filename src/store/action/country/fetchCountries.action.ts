import { FetchAllCountriesInterface } from "@nations-hub/store/action/country/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk<
  FetchAllCountriesInterface['response'],
  FetchAllCountriesInterface['argument'],
  FetchAllCountriesInterface['failure']
>(
    'countries/fetchCountries',
    async (payload, { rejectWithValue }) => {
      try {
        const api = import.meta.env.VITE_FETCH_ALL_COUNTRIES;
        const response = await fetch(api);
        const data = await response.json();

        console.log('data', data);

        const paginatedData = data.slice(0, payload.page * 10); // Pagination logic
        return { countries: paginatedData, totalCountries: data.length };
      } catch (error: any) {
        return rejectWithValue(error?.message);
      }
    }
  );