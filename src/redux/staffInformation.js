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
            // console.log('fetching');
            // console.log(state)
            // current(state.staffInformation) = 'rfdkjhjsd'
            // console.log(current(state.staffInformation));
            Object.assign(state.staffInformation = action.payload)  
            console.log(current(state));          
            // let endpoint = 'http://localhost:7777/staff/dashboard'
            // let staffEmail = localStorage.getItem('staffemail')
            // let staffPassword = localStorage.getItem('staffpassword')
            // let staffClass = localStorage.getItem('staffclass')
            // let details = {
            //     staffClass,
            //     staffEmail,
            //     staffPassword
            // }
            // axios.post(endpoint, details)
            // .then((res)=>{
            //     console.log(res)
            //     if (res.status==200) {
            //         Object.assign(state.staffInformation=res.data)
            //         // state.staffInformation = res.data
            //     } else if(res.status != 200){
            //         state.staffInformation = 'error'
            //     }
            // })
            // .catch((err)=>{
            //     console.log(err);
            // })
        }
    }
})

export const {fetchStaff} = staffInformation.actions

export default staffInformation.reducer