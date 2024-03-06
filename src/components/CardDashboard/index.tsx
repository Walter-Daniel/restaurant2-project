import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Category, Order, Product, User } from "../../interfaces/dashboard";

type Props = {
  title: string;
  total: number;
  data: Category | Order| Product| User;
};

export const CardDashboard: FC<Props> = ({ title, total, data }) => {
  return (

    <Card sx={{ width:'500px', bgcolor: "background.paper" }}>
      <CardHeader title={title} />
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={6} fontSize='1.5rem' bgcolor={'gold'}>
            <Typography variant="body1" color="text.secondary">
              Total: 
            </Typography>
          </Grid>
          <Grid item xs={6} bgcolor={'gold'}>
            <Typography fontSize='1.5rem' color="text.secondary">
              {total}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              Last Added:
            </Typography>
          </Grid>
          {
            Object.entries(data).map(([itemIndex, item]) => (
              <Grid container spacing={1} key={itemIndex} padding='0 1rem'>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {itemIndex}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">
                  {item}
                </Typography>
              </Grid>
              </Grid>
            ))
          }
         
        </Grid>
      </CardContent>
    </Card>

  );
};
