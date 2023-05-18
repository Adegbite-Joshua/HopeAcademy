import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const staffInformation = createSlice({
    name: 'counter',
    initialState: {
        staffInformation: {},
        staffFetchingState: true
    },
    reducers: {
        fetchStaff: (state, action)=>{
            console.log('fetching');
            // console.log(state)
            state.staffInformation = action.payload
            // current(state.staffInformation) = 'rfdkjhjsd'
            // console.log(current(state.staffInformation));
            // Object.assign(state.staffInformation = 'hjhjg')  
            // console.log(current(state));          
        }
    }
})

export const {fetchStaff} = staffInformation.actions

export default staffInformation.reducer