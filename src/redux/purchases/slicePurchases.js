import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valueOriginal: 0,
    currencyValue: 0,
    currencyTotalBuy: 0,
}

const purchaseSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
      addValueToSpend: (state, {payload}) => {
            state.currencyValue += payload;
            state.valueOriginal += payload;
        },
      calculatePurcharses: (state, {payload}) => {
        state.currencyTotalBuy += payload.price * payload.amount;
        state.currencyValue -= payload.price * payload.amount;   
      },
      resetValues: (state) => {
        state.currencyValue = 0;
        state.currencyTotalBuy = 0;
      }
    }
})

export const {addValueToSpend, calculatePurcharses, resetValues} = purchaseSlice.actions;

export const selectorPurchase = state => state.purchases;

export default purchaseSlice.reducer;