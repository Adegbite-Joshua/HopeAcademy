import {createSlice, current} from '@reduxjs/toolkit';

export const adminInformation = createSlice({
    name: 'admin',
    initialState: {
        adminInformation: {},
        dataFetchingState: true,
    },
    reducers: {
        setAdminInfo: (state, action)=>{
            Object.assign(state.adminInformation = action.payload);
            console.log(current(state)); 
        },
        setFetchingState: (state, action)=>{
            Object.assign(state.dataFetchingState = action.payload);
            console.log(current(state));  
        }
    }
}) 

export const {setAdminInfo, setFetchingState } = adminInformation.actions

export default adminInformation.reducer