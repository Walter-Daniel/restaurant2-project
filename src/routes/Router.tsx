import {  Route, Routes } from "react-router-dom"
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
import { Error404Page } from "../pages/Error"
import { Categories } from "../pages/categories"
import { PizzaPage } from "../pages/Pizza"
import { MenuLayout } from "../shared/MenuLayout"
import { BurguerPage } from "../pages/Burguer"
import { SandwichPage } from "../pages/Sandwich"
import { EmpanadaPage } from "../pages/Empanadas"


export const AppRouter = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(checkAuthToken())
  }, [dispatch])
  
  return (
    <Routes>

      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<MenuLayout />} >
          <Route index element={<EmpanadaPage />} />
          <Route path="pizzas" element={<PizzaPage />} />
          <Route path="hamburguesas" element={<BurguerPage />} />
          <Route path="sandwiches" element={<SandwichPage />} />
        </Route>
        

        <Route path="/admin" element={<DashboardLayout />}>
          <Route index element={<PrivateRoute><DashboardPage /> </PrivateRoute>} />
          <Route path="products" element={<PrivateRoute><Products /></PrivateRoute>} />
          <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
          <Route path="users" element={<PrivateRoute><Users /></PrivateRoute>} />  
          <Route path="categories" element={<PrivateRoute><Categories /></PrivateRoute>} />  
        </Route>   

      </Route>

      <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><RegisterPage /></PublicRoute>} />
      <Route path="*" element={<Error404Page />} />

    </Routes>
  )
}
