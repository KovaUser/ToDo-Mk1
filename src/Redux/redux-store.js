import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ListReducer from "./List-reducer";

const rootReducer = combineReducers({
    ListPage: ListReducer
})

const store = configureStore({
    reducer: rootReducer
})
export default store