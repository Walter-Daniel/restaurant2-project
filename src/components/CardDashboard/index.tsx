import { Card, CardContent, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
    title: string;
    total: number;
}

export const CardDashboard: FC<Props> = ({ title, total }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}