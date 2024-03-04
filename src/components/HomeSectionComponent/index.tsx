import { Grid, Typography } from '@mui/material'
import { FC } from 'react'
import { Product } from '../../interfaces/product'
import { CardComponent } from '../Card'

export const HomeSectionComponent: FC<Product> = ({_id, name, category, detail, price}) => {
  return (
    <Grid container spacing={2} direction="row" key="hola">
        <Grid item xs={12} sm={6} md={4}  key={_id}>
            <Typography variant='h2'>{category.name}</Typography>
            <CardComponent name={name} price={price} detail={detail} id={_id}/>
        </Grid>
    </Grid>
  )
}
