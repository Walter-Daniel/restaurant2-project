import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { FC } from 'react';
import { Typography } from '@mui/material';

type Props = {
    children: React.ReactNode,
 };
 
export const PrivateRoute: FC<Props> = ({children}) => {
   
    const {user, status} = useAppSelector((state) => state.authReducer);
   if(status === 'checking'){
      <>
         <Typography sx={{ fontSize:'15rem' }}>GOLAAA</Typography>
      </>
   }else if(user.role === "ADMIN_ROLE") {
       return children;
    }else{
      return <Navigate to='/' replace />;
    }
 
};

export const PublicRoute: FC<Props> = ({children}) => {
   const {user} = useAppSelector((state) => state.authReducer);
  
   if (user.role === null) {
      return children;
   }

   return <Navigate to='/' replace />;
}