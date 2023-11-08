import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currencyValue: 0,
    currencyTotalBuy: 0,
}

const purchaseSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
      addValueToSpend: (state, {payload}) => {
            state.currencyValue = payload;
        },
      calculatePurcharses: (state, {payload}) => {
        state.currencyTotalBuy += payload.price * payload.amount;
        state.currencyValue -= payload.price * payload.amount;
      }
    }
})

export const {addValueToSpend, calculatePurcharses} = purchaseSlice.actions;

export const selectorPurchase = state => state.purchases;

export default purchaseSlice.reducer;