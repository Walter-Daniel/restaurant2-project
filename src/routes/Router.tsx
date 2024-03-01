import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { RouterLayout } from "../shared/RouterLayout"
import { RegisterPage } from "../pages/register"
import { DashboardLayout } from "../shared/DashboardLayout"
import { Products } from "../pages/products"
import { DashboardPage } from "../pages/Dashboard"
import { Orders } from "../pages/orders"
import { Users } from "../pages/users"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/admin" element={<DashboardLayout/>}>
            <Route path="/admin/" element={<DashboardPage/>}/>
            <Route path="/admin/products" element={<Products/>}/>
            <Route path="/admin/orders" element={<Orders/>}/>
            <Route path="/admin/users" element={<Users/>}/>
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  )
}
