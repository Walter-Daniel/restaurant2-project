import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { RouterLayout } from "../shared/RouterLayout"
import { RegisterPage } from "../pages/register"


export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<HomePage />}/>
        </Route>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
    </Routes>
  )
}
