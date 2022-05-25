import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    locationList: {},
    errorMessage: null
}

export const locationSlice = createSlice({
    name: 'locations', initialState,
    reducers: {
        getLocationListSuccess: (state, action) => {
            state.locationList = action.payload;
            state.errorMessage = null;
        },
        getLocationListError: (state, action) => {
            state.locationList = {};
            state.errorMessage = action.payload;
        }
    }
});
export const {
    getLocationListSuccess,
    getLocationListError
} = locationSlice.actions;

export default locationSlice.reducer;
