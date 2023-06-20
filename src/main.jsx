import React from 'react'
import ReactDOM from 'react-dom/client'
import Signin from './signin.jsx'
import Register from './register.jsx'
import Profile from './profile.jsx'
import Create from './create.jsx'
import PrivateRoutes from './PrivateRoutes.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />} >
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/create" element={<Create />} />
        </Route>
        <Route path="/" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
