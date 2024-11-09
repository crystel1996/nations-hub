import { FetchCountryInterface } from "@nations-hub/store/action/country/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountry = createAsyncThunk<
    FetchCountryInterface['response'],
    FetchCountryInterface['argument'],
    FetchCountryInterface['failure']
>(
    'countries/fetchCountry',
    async (payload, { rejectWithValue }) => {
      try {
        const api = `${import.meta.env.VITE_FETCH_COUNTRY}/${payload.alphaCode}`;
        const response = await fetch(api);
        const data = await response.json();
        return data;
      } catch (error: any) {
        return rejectWithValue(error?.message);
      }
    }
  );