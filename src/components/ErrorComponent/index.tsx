import { FC } from "react"
import { Box, Stack, Typography } from "@mui/material"
import ErrorIcon from '@mui/icons-material/Error';


export const ErrorComponent:FC = () => {
  return (
    <Box sx={{ width: '100%', padding:'1rem'}}>
        <Stack direction="row" spacing={2} display='flex' justifyContent='center'>
        <ErrorIcon fontSize="large"/>
        <Typography variant="h4">Error al cargar los datos</Typography>
        </Stack> 
    </Box>
  )
}
