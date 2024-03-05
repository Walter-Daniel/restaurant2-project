import { useNavigate } from 'react-router-dom';          
import { useAppStore } from '../../appStore';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Box, List, Divider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';

import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const StyledListItem = styled(ListItem)(() => ({
  '&:hover': {
    backgroundColor: 'gold',
    color: 'black',
  },
}));

const items = [
  {
    title: "Dashboard",
    navegation: "/admin",
    icon: <DashboardIcon />
  },
  {
    title: "Categories",
    navegation: "/admin/categories",
    icon: <CategoryIcon />
  },
  {
    title: "Orders",
    navegation: "/admin/orders",
    icon: <MenuBookIcon />
  },
  {
    title: "Products",
    navegation: "/admin/products",
    icon: <RestaurantIcon />
} ,
  {
      title: "Users",
      navegation: "/admin/users",
      icon: <PeopleIcon />
  }, 
];


export default function Sidebar() {
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open} style={{ backgroundColor:'red' }}>
        <DrawerHeader>
        </DrawerHeader>
        <Divider />
        <List>
          {items.map((item) => (
            <StyledListItem key={item.title} disablePadding sx={{ display: 'block' }} onClick={() =>navigate(`${item.navegation}`)}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  { item.icon }
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </StyledListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}