import { createSlice, current } from "@reduxjs/toolkit";
import socketClient from 'socket.io-client'


export const socketIO = createSlice({
    name: 'socketIO',
    initialState:{
        socket: socketClient('https://horn-efficient-headphones.glitch.me'),
    },
    reducers: {
        setSocket: (state, action)=>{
            state.socket = action.payload
        },
        setIO: (state, action)=>{
            state.io = action.payload
        }
    }

});

export const {setSocket, setIO} = socketIO.actions;
export default socketIO.reducer;

