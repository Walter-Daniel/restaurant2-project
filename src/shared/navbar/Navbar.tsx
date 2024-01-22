import { AppBar, Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import React, { useState } from 'react'

interface Props {
    window?: () => Window;
  }
  
  const drawerWidth = 240;
//   const navItems = ['Inicio', 'Iniciar Sesión', 'Registrarse'];
  const navItems = [
    {
        title: "Inicio",
        navegation: "/",
        btn: "contained"
    },
    {
        title: "Iniciar Sesión",
        navegation: "/login",
        btn: "contained"
    },
    {
        title: "Registrarse",
        navegation: "/register",
        btn: "outlined"
    },
  ];

export const Navbar:React.FC<Props> = (props:Props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Bon Appetit
            </Typography>
            <Divider style={{backgroundColor: "#dad7cd" }}/>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center', 
                                              "&:hover": {
                                                    bgcolor: "#dad7cd",
                                                } 
                                             }}>
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
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Grid item>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Food
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <Stack direction="row" spacing={2}>
                            {navItems.map((item) => (
                                <Button key={item.title} sx={{color:"#fff"}}>
                                    {item.title}
                                </Button>
                            ))}
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
