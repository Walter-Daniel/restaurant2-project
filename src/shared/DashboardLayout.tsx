
import { Box } from "@mui/material"
import Sidebar from "./sidebar"
import { Outlet } from "react-router-dom"


export const DashboardLayout = () => {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Outlet />
    </Box>
    </>
  )
}
