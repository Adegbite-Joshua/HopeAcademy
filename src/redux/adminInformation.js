import {createSlice, current} from '@reduxjs/toolkit';

export const adminInformation = createSlice({
    name: 'admin',
    initialState: {
        adminInformation: {},
        dataFetchingState: true,
        allStudents: [],
        allStaffs: [],
        allCourses: []
    },
    reducers: {
        setAdminInfo: (state, action)=>{
            Object.assign(state.adminInformation = action.payload);
            console.log(current(state)); 
        },
        setFetchingState: (state, action)=>{
            Object.assign(state.dataFetchingState = action.payload);
            console.log(current(state));  
        },
        setAllStudents: (state, action)=>{
            Object.assign(state.allStudents = action.payload);
            console.log(current(state));  
        },
        setAllStaffs: (state, action)=>{
            Object.assign(state.allStaffs = action.payload);
            console.log(current(state));  
        },
        setAllCourses: (state, action)=>{
            Object.assign(state.allCourses = action.payload);
            console.log(current(state));  
        },
        updateAllCourses: (state, action)=>{
            var updatedCourses = state.allCourses.map((array, index) => index === action.payload.index ? action.payload.newData : array);
            Object.assign(state.allCourses = updatedCourses);
            console.log(current(state));  
        }

    }
}) 

export const {setAdminInfo, setFetchingState, setAllStudents, setAllStaffs, setAllCourses, updateAllCourses } = adminInformation.actions

export default adminInformation.reducer