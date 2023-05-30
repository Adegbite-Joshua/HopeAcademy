import { createSlice, current } from "@reduxjs/toolkit";

export const staffInformation = createSlice({
    name: 'staff',
    initialState: {
        staffInformation: {},
        allStaffs: [],
        allStudents: [],
        classStudents: [],
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
        },
        fetchClassStudents: (state, action)=>{
            Object.assign(state.classStudents = action.payload)  
            console.log(current(state));
        }
    }
})

export const {fetchStaff, fetchAllStaffs, fetchAllStudents, fetchClassStudents} = staffInformation.actions

export default staffInformation.reducer