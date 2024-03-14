import { Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import { offlineItems, onlineItems } from "../../helpers/navbarItems"
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

import logo from '/logo.png';
import { FC } from "react";

interface Props {
    window?: () => Window;
    handleDrawerToggle: () => void;
  }


export const DrawerComponent: FC<Props> = ({handleDrawerToggle}) => {

    const navigate = useNavigate();
    const {status} = useAppSelector((state) => state.authReducer );

  return (

    <>
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
                    <ListItem key={item.navegation} disablePadding>
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
    </>
   
  )
}
