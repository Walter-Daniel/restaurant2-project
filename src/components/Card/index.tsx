import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { useAppSelector } from "../../redux/hooks";

type Props = {
    name: string;
    price: number;
    detail: string;
    id: string;
}

export const CardComponent: FC<Props> = ({ name, price, detail, id }) => {

  const {isAuth} = useAppSelector((state) => state.authReducer);

  return (
    <Card sx={{ maxWidth: 345 }} key={id}>
        <CardMedia
        sx={{ height: 140,}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title={name}
        />
        <CardContent sx={{ minHeight: 137, maxHeight:137 }}>
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
