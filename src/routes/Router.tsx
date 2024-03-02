import {  Route, Routes } from "react-router-dom"
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
import { useAppDispatch} from "../redux/hooks"
import { PrivateRoute, PublicRoute } from "./RoutesConditions"
import { Error404 } from "../pages/Error"


export const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(checkAuthToken())
  }, [dispatch])
  
  return (
    <Routes>
      
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<PrivateRoute><DashboardPage /> </PrivateRoute>} />
          <Route path="products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path="users" element={<PrivateRoute><Users /></PrivateRoute>} />  
        </Route>   

      </Route>

      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="*" element={<Error404 />} />

    </Routes>
  )
}
