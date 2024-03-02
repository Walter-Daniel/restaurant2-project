import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { offlineItems, onlineItems } from "../../helpers/navbarItems"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import logo from '/logo.png';
import { useState, FC } from "react";

interface Props {
    window?: () => Window;
  }

const drawerWidth = 240;


export const DrawerComponent: FC<Props> = (props:Props) => {

    const navigate = useNavigate();
    const {status} = useAppSelector((state) => state.authReducer );
    const { window } = props;
    
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

  return (

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
    </Drawer>
   
  )
}
