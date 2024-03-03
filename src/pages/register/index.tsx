import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

import registerBG from '../../assets/auth/register.avif'
import { registerValidate } from '../../utilities/FormValidation';
import { useFormik } from 'formik';
import { startRegister } from '../../redux/thunk/auth.thunk';
import { useNotification } from '../../context/notificationContext/useNotification';


export type Props = {
    fullName: string
    email: string;
    password: string;
    password2?: string;  
}

export const RegisterPage = () => {
  const { getSuccess, getError } = useNotification();
  
  const formik = useFormik<Props>({
    initialValues: {
      fullName: '',
      email: '',
      password:'',
      password2: ''
    },
    validationSchema: registerValidate,
    onSubmit: async (values, { resetForm }) => {
      try {
        await startRegister(values);
        resetForm();
        getSuccess('Tu registro ha sido completado con éxito. Ya puedes iniciar sesión.')
      } catch (error) {
        console.error('Error en el registro:', error);
        getError(`Error en el registro: ${error}`, )
      }
    }
  }); 
 
  return (
      <Container maxWidth="lg">
        <Grid 
          container 
          direction="row"
          justifyContent='center' 
          alignContent='center'
          height='100vh'
          className='animate__animated animate__fadeIn'
          >
            <Grid item  xs={24} sm={8} md={6}>
              <Paper sx={{ padding: '1.2em', borderRadius: '0.5em', minHeight:'80vh'}} >
                <h2>Registrate</h2>
                <Box component="form" 
                onSubmit={formik.handleSubmit}
                >
                  <TextField 
                    id='fullName'
                    name= 'fullName'
                    label='Nombre completo' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                    />
                  <TextField 
                    id='email'
                    name= 'email'
                    label='Correo Electrónico' 
                    margin='normal'
                    type='text'
                    fullWidth 
                    sx={{ mt:2, mb:1.5 }} 
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                  <TextField 
                    id='password'
                    name='password'
                    label='Contraseña' 
                    margin='normal'
                    type='password'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                  <TextField 
                    id='password2'
                    name='password2'
                    label='Confirmar Contraseña' 
                    margin='normal'
                    type='password'
                    fullWidth 
                    sx={{ mt:1.5, mb:1.5 }} 
                    value={formik.values.password2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password2 && Boolean(formik.errors.password2)}
                    helperText={formik.touched.password2 && formik.errors.password2}
                    />
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Registrate</Button>
                </Box>
                <Box>
                  <Typography>
                    Ya tienes una cuenta?. <Link to="/login" style={{ color: 'black' }}>Inicia sesión</Link>
                  </Typography>
                  <Typography>
                    Regresar al <Link to="/" style={{ color: 'black' }}>inicio</Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6} maxHeight='80vh' boxShadow={1} borderRadius='10px'>
              <img className='bg-authentication' src={registerBG} alt="" />
            </Grid>
        </Grid>
      </Container>
  )
}