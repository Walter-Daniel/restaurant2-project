import { Box, Grid, Skeleton, Stack } from "@mui/material"

export const CardSkeleton = () => {
    const skeletonCard = (
        <>
            <Stack sx={{ backgroundColor: 'white', margin: '1rem' }}>
                <Box sx={{ width: 345, padding:'1rem' }}>
                    <Skeleton variant="rectangular" height={118} animation="pulse"/>
                    <Skeleton animation="pulse"/>
                    <Skeleton variant="text" animation="pulse"/>
                    <Skeleton width="60%" animation="wave"/>
                </Box>
            </Stack> 
            <Stack spacing={2} sx={{ backgroundColor: 'white', margin: '1rem' }}>
                <Box sx={{ width: 345,  padding:'1rem'  }}>
                    <Skeleton variant="rectangular" height={118} animation="pulse"/>
                    <Skeleton animation="pulse"/>
                    <Skeleton variant="text" animation="pulse"/>
                    <Skeleton width="60%" animation="wave"/>
                </Box>
            </Stack> 
            <Stack spacing={2} sx={{ backgroundColor: 'white', margin: '1rem' }}>
                <Box sx={{ width: 345,  padding:'1rem' }}>
                    <Skeleton variant="rectangular" height={118} animation="pulse"/>
                    <Skeleton animation="pulse"/>
                    <Skeleton variant="text" animation="pulse"/>
                    <Skeleton width="60%" animation="wave"/>
                </Box>
            </Stack> 
        </>
    )
    return (
        <Grid container wrap="wrap" sx={{marginTop:'5rem'}}>
          {skeletonCard}
        </Grid>
    )
}
