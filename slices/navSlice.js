import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // the initial state of the nav slice.
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  // createSlice is a function that takes a configuration object.
  name: "nav", // name is the name of the slice.
  initialState, // initialState is the initial state of the slice.
  reducers: {
    // reducers is an object that contains the reducers of the slice.
    setOrigin: (state, action) => {
      // state is the data layer.  action is the action that is being dispatched.
      state.origin = action.payload; // action.payload is the payload of the action.
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions; // export the actions from the slice.

export const selectOrigin = (state) => state.nav.origin; // export the selectors from the slice. of the origin.
export const selectDestination = (state) => state.nav.destination; // export the selectors from the slice. of the destination.
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation; // export the selectors from the slice. of the travel time information.

export default navSlice.reducer; // export the reducer from the slice.
