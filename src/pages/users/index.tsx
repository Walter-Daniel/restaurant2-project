import { ProductsForm, TableComponent , ModalComponent, LoadingComponent, ErrorComponent  } from "../../components";
import { Column } from "../../components/TableComponent";


import { styled } from '@mui/material/styles';
import { Grid, Box, Paper, Typography, Stack } from '@mui/material';
import { User } from "../../interfaces/user";
import { useUsers } from "../../hooks/useUsers";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

const productColumns: Column<User>[] = [
    { label: 'ID', field: '_id' },
    { label: 'User', field: 'fullName' },
    { label: 'Email', field: 'email' },
    { label: 'Role', field: 'role' },
    { label: 'Active', field: 'active' },
];
export const Users = () => {

    const usersQuery = useUsers();

  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <Typography variant='h3' sx={{ padding:'2rem', textTransform:'uppercase', fontWeight:'900' }}>Usuarios</Typography>
        <ModalComponent children={<ProductsForm />} title="Crear Producto" btnStyle="contained" btnName="Crear Producto"/>
      </Stack>

      <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'center'  }}>
        <Grid item xs={12}>
          <Item>
            {usersQuery.isLoading ? <LoadingComponent />
                                     :usersQuery.data ? <TableComponent<User> data={usersQuery.data} columns={productColumns} />
                                     :<ErrorComponent />
          
            } 
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

