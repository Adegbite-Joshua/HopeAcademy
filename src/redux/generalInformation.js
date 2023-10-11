import {createSlice, current} from '@reduxjs/toolkit';

export const generalInformation = createSlice({
    name: 'admin',
    initialState: {
        banksList: [],
        states: [],
        LGAs: []        
    },
    reducers: {
        setbanksList: (state, action)=>{
            Object.assign(state.banksList = action.payload);
            console.log(current(state)); 
        },
        setstates: (state, action)=>{
            Object.assign(state.states = action.payload);
            console.log(current(state)); 
        },
        setLGAs: (state, action)=>{
            Object.assign(state.LGAs = action.payload);
            console.log(current(state)); 
        },
    }
}) 

export const {setbanksList, setstates, setLGAs} = generalInformation.actions

export default generalInformation.reducer