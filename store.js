import { configureStore } from "@reduxjs/toolkit"; // simplifies the store setup process.
import navReducer from "./slices/navSlice"; // import the nav slice of the redux store.

export const store = configureStore({
    reducer: {
        nav: navReducer // the nav slice of the redux store.
    }
});

// The data layer is the redux store. It is the glue between the data and the view.