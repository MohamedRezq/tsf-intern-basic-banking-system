import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  customers: [],
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    storeCustomers: (state, action) => {
      action.payload.map((customer, i) => {
        state.customers.push(customer);
      });
    },
  },
});

export const { storeCustomers } = customersSlice.actions;

export default customersSlice.reducer;
