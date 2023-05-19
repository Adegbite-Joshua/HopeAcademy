import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const staffInformation = createSlice({
    name: 'counter',
    initialState: {
        staffInformation: {},
        allStaffs: [],
        allStudents: [],
        staffFetchingState: true
    },
    reducers: {
        fetchStaff: (state, action)=>{
            Object.assign(state.staffInformation = action.payload)  
            console.log(current(state));         
        },
        fetchAllStaffs: (state, action)=>{
            Object.assign(state.allStaffs = action.payload)  
            console.log(current(state)); 
        },
        fetchAllStudents: (state, action)=>{
            Object.assign(state.allStudents = action.payload)  
            console.log(current(state)); 
        }
    }
})

export const {fetchStaff, fetchAllStaffs, fetchAllStudents} = staffInformation.actions

export default staffInformation.reducer