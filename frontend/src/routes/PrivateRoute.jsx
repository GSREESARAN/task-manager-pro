import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoute = ({ allowedRoles }) => {
  const { currentUser } = useSelector((state) => state.user)

  if (!currentUser) {
    return <Navigate to="/login" />
  }

  if (!allowedRoles.includes(currentUser.role)) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}

export default PrivateRoute