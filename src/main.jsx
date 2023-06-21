import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'

import './index.css'
import PrivateRoutes from './PrivateRoutes.jsx'
import Signin from './signin.jsx'
import Register from './register.jsx'
import Profile from './profile.jsx'
import Create from './create.jsx'

const queryClient = new QueryClient({ defaultOptions: {queries: { staleTime: 1000 * 60 * 10 }}})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={ queryClient }>
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
    </QueryClientProvider>
  </React.StrictMode>
)
