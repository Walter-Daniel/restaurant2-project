import { Box, Grid } from '@mui/material';
import { CardDashboard } from '../../components';

export const DashboardPage = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
            <CardDashboard title='Category' total={5} />
        <Grid item xs={6} md={3}>
        </Grid>
        <Grid item xs={6} md={3}>
            <CardDashboard title='Order' total={3} />

        </Grid>
        <Grid item xs={6} md={3}>
            <CardDashboard title='Product' total={5} />

        </Grid>
        <Grid item xs={6} md={3}>
            <CardDashboard title='User' total={3} />
        </Grid>
        </Grid>
    </Box>
    )
}
