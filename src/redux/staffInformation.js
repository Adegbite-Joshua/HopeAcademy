import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let staffEmail = localStorage.getItem('staffemail')
let staffPassword = localStorage.getItem('staffpassword')
let staffClass = localStorage.getItem('staffclass')
let details = {
    staffClass,
    staffEmail,
    staffPassword
}
let endpoint = 'http://localhost:7777/staff/dashboard'

export const staffInformation = createSlice({
    name: 'counter',
    initialState: {
        staffInformation: [],
        staffFetchingState: true
    },
    reducers: {
        fetchStaff: (state)=>{
            axios.post(endpoint, details)
            .then((res)=>{
                if (res.status==200) {
                    state.staffInformation = res.data
                } else if(res.status != 200){
                    state.staffInformation = 'error'
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
})

export const {fetchStaff} = staffInformation.actions

export default staffInformation.reducer