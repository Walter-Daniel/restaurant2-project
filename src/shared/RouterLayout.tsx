
import { Navbar } from "./navbar/Navbar"
import { Outlet } from "react-router-dom"


export const RouterLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
    </>
  )
}
