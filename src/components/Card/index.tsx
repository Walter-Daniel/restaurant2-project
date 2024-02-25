import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { useAppSelector } from "../../redux/hooks";
import pizza from '../../assets/pizzas/peperoni.jpg'

type Props = {
    name: string;
    price: number;
    detail: string;
    id: string;
}

export const CardComponent: FC<Props> = ({ name, price, detail, id }) => {

  const {isAuth} = useAppSelector((state) => state.authReducer);

  return (
    <Card sx={{
                maxWidth: 280, 
                borderRadius: '4px', 
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                border: '1px solid transparent',
                transition: 'border-color 0.3s ease',
                '&:hover': {
                  borderColor: 'black',
                },
              }} 
        key={id}>
        <CardMedia
        sx={{ height: 200}}
        image={pizza}
        title={name}
        />
        <CardContent sx={{ minHeight: 135, maxHeight:135 }}>
            <Typography gutterBottom variant="h5" component="div">
                {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {detail}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{fontWeight:'bold', marginTop:'0.3rem' }}>
                Precio: ${price}
            </Typography>
        </CardContent>
        {
            isAuth && (
                <CardActions>
                    <Button variant="contained" fullWidth>Comprar</Button>
                </CardActions>
            )
        }
        
    </Card>
  )
}
