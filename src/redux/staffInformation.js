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
            Object.assign(state.staffInformation = action.payload)  
            console.log(current(state));         
        }
    }
})

export const {fetchStaff} = staffInformation.actions

export default staffInformation.reducer