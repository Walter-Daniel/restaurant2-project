import { Box, Button, Grid, IconButton, Stack, Toolbar, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useAppStore } from '../../appStore';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import { startLogout } from '../../redux/thunk/auth.thunk';

import { DrawerComponent } from './DrawerComponent';
import { adminItems, offlineItems, onlineItems } from '../../helpers/navbarItems';



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
  

const AppBar = styled(MuiAppBar, {})<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
}));

export const Navbar = () => {

    const navigate = useNavigate();
    const {status, user} = useAppSelector((state) => state.authReducer );
    const dispath = useAppDispatch();


    const location = useLocation();

    const updateOpen = useAppStore((state) => state.updateOpen);
    const dopen = useAppStore((state) => state.dopen);

    const handlerLogout = () => {
        dispath(startLogout());
        navigate('/login')
    }

  return (
    <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" elevation={0}>
            <Toolbar>
                {(user.role === 'ADMIN_ROLE' && location.pathname.includes('admin')) && (
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={()=>updateOpen(!dopen)}
                    sx={{ mr: 2}}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
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
                           
                            {((status === 'non-authenticated') ? offlineItems 
                                : (status === 'authenticated' && user.role === 'USER_ROLE') 
                                ? onlineItems : adminItems).map((item) => (
                                <Button key={item.navegation} variant="text" sx={{color:"#000", fontWeight:'600'}} color='warning' onClick={() => navigate(`${item.navegation}`)}>
                                    {item.title}
                                </Button>
                            ))}
                            {
                                ((status === 'authenticated') && (
                                    <Button key="cerrar sesión" variant="contained"  sx={{color:"#000", backgroundColor:'gold',fontWeight:'600'}} color='warning' onClick={()=> handlerLogout()}>
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
        <DrawerComponent />
        </nav>
    </Box>
  );
}
