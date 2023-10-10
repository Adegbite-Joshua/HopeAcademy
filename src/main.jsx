import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../node_modules/font-awesome/css/font-awesome.css'
import { BrowserRouter } from "react-router-dom";
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import studentInformation from './redux/studentInformation'
import staffInformation from './redux/staffInformation'
import adminInformation from './redux/adminInformation'
import socketIO from './redux/socketIO'



const store = configureStore({
  reducer: {
    studentInformation,
    staffInformation,
    adminInformation,
    socketIO
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
