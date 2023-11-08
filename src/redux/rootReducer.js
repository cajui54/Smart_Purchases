import { combineReducers } from "@reduxjs/toolkit";
import slicePurchases from "./purchases/slicePurchases";

const rootReducer = combineReducers({
    slicePurchases
})

export default rootReducer;