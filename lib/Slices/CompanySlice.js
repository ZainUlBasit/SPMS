import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetCompaniesApi } from "../Https";

export const fetchCompanies = createAsyncThunk("fetchCompanies", async () => {
  try {
    let response = await GetCompaniesApi();
    console.log(response);
    return response.data.data.payload;
  } catch (error) {
    console.log(error);
  }
});

const companySlice = createSlice({
  name: "companies",
  initialState: {
    loading: true,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchCompanies.rejected, (state, action) => {
      console.log("Error", action);
      state.loading = false;
      state.isError = true;
    });
  },
});

export default companySlice.reducer;
