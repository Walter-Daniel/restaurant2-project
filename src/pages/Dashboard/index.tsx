import { Alert, Box, Grid, Typography } from '@mui/material';
import { CardDashboard, ErrorComponent, LoadingComponent } from '../../components';
import { useDashboard } from '../../hooks/useDashboard';
import { FC } from 'react';

export const DashboardPage: FC = () => {

    const { isError, isLoading, data } = useDashboard();

    if(isLoading) return <LoadingComponent />
    if(isError) return <ErrorComponent />
    console.log({data})
    if(!data) return <Typography>No hay data</Typography>

    const { lastAdded, total } = data;

    const product = lastAdded.product;
    const totalProducts = total.totalProducts;

    const category = lastAdded.category ;
    const totalCategories = total.totalCategories;

    const order = lastAdded.order ;
    const totalOrders = total.totalOrders;

    const user = lastAdded.user;
    const totalUsers = total.totalUsers;

  return (
    <Box sx={{  flexGrow: 1,
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} >
                <Box display="flex" justifyContent="center">
                    {
                        (!category) ? <Alert variant="filled" severity="warning">No hay categorías.</Alert>:(
                            <CardDashboard title='Categories' total={totalCategories} data={category} key={category._id}/>
                        )
                    }
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box display="flex" justifyContent="center">
                    {
                        (!order) ? <Alert variant="filled" severity="warning">No hay ordenes.</Alert>
                                :(
                                    <CardDashboard title='Orders' total={totalOrders} data={order} key={order._id}/>
                                )
                    }
                    
                </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <Box display="flex" justifyContent="center">
                    {
                        !product ? <Alert variant="filled" severity="warning">No hay productos.</Alert>
                                :(
                                    <CardDashboard title='Products' total={totalProducts} data={product} key={product._id}/>
                                )
                    }
                </Box>
            </Grid>
            <Grid item xs={12} md={6} >
                <Box display="flex" justifyContent="center">
                    {
                        (!user) ? <Alert variant="filled" severity="warning">No hay usuarios.</Alert>
                                :(
                                    <CardDashboard title='Users' total={totalUsers} data={user} key={user._id}/>
                                )
                    }
                </Box>
            </Grid>             
        </Grid>
    </Box>
    )
}
