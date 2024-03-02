import { Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useAppStore } from '../../appStore';

import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import { startLogout } from '../../redux/thunk/auth.thunk';

interface Props {
    window?: () => Window;
  }

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

  
  const drawerWidth = 240;
//   const navItems = ['Inicio', 'Iniciar Sesión', 'Registrarse'];
  const onlineItems = [
    {
        title: "Inicio",
        navegation: "/",
        btn: "contained"
    },
    {
        title: "Carrito",
        navegation: "/cart",
        btn: "contained"
    }
  ];

  const offlineItems = [
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
        btn: "outlined"
    },
  ];

const AppBar = styled(MuiAppBar, {})<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export const Navbar:React.FC<Props> = (props:Props) => {

    const navigate = useNavigate();
    const {status} = useAppSelector((state) => state.authReducer );
    const dispath = useAppDispatch();

    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

    const handlerLogout = () => {
        dispath(startLogout());
        navigate('/login')
    }

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display:'flex', alignItems:'center', justifyContent:'center', padding:'0.5rem'}}>
                <img src={logo} alt="Logo Bon Appétit" style={{ height: '2.9rem' }} />
                <Typography
                    variant="h1"
                    component="div"
                    sx={{ textTransform:'uppercase', fontSize:'1.5rem', fontWeight:'600'  }}
                >
                    Bon <span style={{ color:'#d90429' }}>Appétit</span>
                </Typography>
            </Box>
            <Divider style={{backgroundColor: "#dad7cd" }}/>
            <List>
                {((status === 'authenticated') ? onlineItems : offlineItems).map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', 
                                              "&:hover": {
                                                    bgcolor: "#dad7cd",
                                                } 
                                             }} onClick={() => navigate(`${item.navegation}`)} >
                            <ListItemText primary={item.title}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" elevation={0}>
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={()=>updateOpen(!dopen)}
                sx={{ mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton> */}
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
                        <img src={logo} alt="Logo Bon Appétit" style={{ height: '2.9rem' }} />
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block', textTransform:'uppercase', fontSize:'2rem', fontWeight:'600' } }}
                        >
                            Bon <span style={{ color:'#d90429' }}>Appétit</span>
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Stack direction="row" spacing={2}>
                            {((status === 'authenticated') ? onlineItems : offlineItems).map((item) => (
                                <Button key={item.title} variant="text" sx={{color:"#000", fontWeight:'600'}} onClick={() => navigate(`${item.navegation}`)}>
                                    {item.title}
                                </Button>
                            ))}
                            {
                                ((status === 'authenticated') && (
                                    <Button key="cerrar sesión" variant="text"  sx={{color:"#000"}} onClick={()=> handlerLogout()}>
                                        Cerrar sesión
                                    </Button>
                                ))
                            }
                        </Stack>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <nav>
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true,
            }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            {drawer}
        </Drawer>
        </nav>
    </Box>
  );
}
