import { createSlice, current } from "@reduxjs/toolkit";
import { io } from "socket.io-client";


export const socketIO = createSlice({
    name: 'socketIO',
    initialState:{
        // socket: socketClient('https://horn-efficient-headphones.glitch.me'),
        socket: io("https://horn-efficient-headphones.glitch.me", {
            withCredentials: true,
            extraHeaders: {
              "my-custom-header": "hopeacademy"
            }
          }),
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

