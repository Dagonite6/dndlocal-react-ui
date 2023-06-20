import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    return (
      localStorage.getItem("access_token") ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PrivateRoutes