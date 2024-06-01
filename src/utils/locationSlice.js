import { createSlice } from "@reduxjs/toolkit"

const locationSlice=createSlice({
    name:"location",
    initialState: {
        latitude: null,
        longitude: null,
    },
    reducers:{
        setLocation: (state,action) => {
            const {latitude,longitude} = action.payload;
            state.latitude = latitude;
            state.longitude = longitude;
        },
        clearLocation:(state)=>{
            state.latitude = null;
            state.longitude = null;
        }
    }
}
)

export const {setLocation, clearLocation} =locationSlice.actions;
export default locationSlice.reducer;

