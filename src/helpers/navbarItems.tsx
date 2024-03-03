import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export const onlineItems = [
    {
        title: "Inicio",
        navegation: "/",
        btn: "contained"
    },
    {
        title: <ShoppingCartIcon />,
        navegation: "/cart",
        btn: "contained"
    }
  ];

 export const offlineItems = [
    {
        title: "Inicio",
        navegation: "/",
        btn: "contained"
    },
    {
        title: "Iniciar Sesión",
        navegation: "login",
        btn: "contained"
    },
    {
        title: "Registrarse",
        navegation: "register",
        btn: "contained"
    },
  ];