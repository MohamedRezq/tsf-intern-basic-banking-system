import { combineReducers } from "redux";

import customers from "./customers/customersSlice";

const reducers = combineReducers({
    customers,
});

export default reducers;
