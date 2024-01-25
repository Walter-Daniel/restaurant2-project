import { Container, Button, Grid, Paper, Box, Typography, TextField } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import loginBG from '../../assets/auth/login.jpg'

import { useFormik } from 'formik';
import { loginValidate } from '../../utilities/FormValidation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/slices/auth.slice';

export type LoginType = {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {isAuth} = useAppSelector((state) => state.authReducer);
 
  // const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
     email: '',
     password:''
    },
    validationSchema: loginValidate,
    onSubmit: (values: LoginType) => {
      // getSuccess(JSON.stringify(values))
      dispatch(login());
      navigate('/');
      // dispatch(login(values)).then((ok) => {if(ok) return navigate("/") })
      console.log(values)
    },
  });

  return isAuth ? <Navigate to = "/" /> : (
      <Container maxWidth="lg">
        <Grid 
          container 
          direction="row"
          justifyContent='center' 
          alignContent='center'
          height='100vh' 
          className='animate__animated animate__fadeIn'
          >
            <Grid item xs={24} sm={8} md={6}>
              <Paper sx={{ padding: '1.2em', borderRadius: '0.5em',height:'80vh', display:'flex', flexDirection: 'column', justifyContent:'center' }}>
                <h2>Iniciar Sesión</h2>
                <Box component="form" 
                onSubmit={formik.handleSubmit}
                >
                  <TextField 
                    id='email'
                    name= 'email'
                    label='Correo' 
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
                  <Button 
                    fullWidth 
                    type='submit'
                    variant='contained'
                    sx={{ mt:1.5, mb:3 }}
                    >Iniciar Sesión</Button>
                </Box>
                <Box>
                  <Typography>
                    No tienes una cuenta?. <Link to="/register" style={{ color: 'black' }}>Registrate</Link>
                  </Typography>
                  <Typography>
                    Regresar al <Link to="/" style={{ color: 'black' }}>inicio</Link>
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6} maxHeight='80vh' boxShadow={1} borderRadius='10px'>
              <img className='bg-authentication' src={loginBG} alt="" /> 
            </Grid>
        </Grid>
      </Container>
  )
}