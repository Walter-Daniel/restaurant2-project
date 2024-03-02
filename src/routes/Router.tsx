import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { RouterLayout } from "../shared/RouterLayout"
import { RegisterPage } from "../pages/register"
import { DashboardLayout } from "../shared/DashboardLayout"
import { Products } from "../pages/products"
import { DashboardPage } from "../pages/Dashboard"
import { Orders } from "../pages/orders"
import { Users } from "../pages/users"
import { useEffect } from "react"
import { checkAuthToken } from "../redux/thunk/auth.thunk"
import { useAppDispatch, useAppSelector } from "../redux/hooks"


export const AppRouter = () => {
  const dispatch = useAppDispatch();
  const {status, user} = useAppSelector((state) => state.authReducer);


  useEffect(() => {
   dispatch(checkAuthToken())
  }, [dispatch])
  
  
  return (
    <Routes>
    <Route path="/" element={<RouterLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<DashboardLayout />}>
        {user.role === "admin" ? (
          <>
            <Route index element={<DashboardPage />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </>
        ) : (
          <Navigate to="/" replace />
        )}
      </Route>
    </Route>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
  </Routes>
  )
}
