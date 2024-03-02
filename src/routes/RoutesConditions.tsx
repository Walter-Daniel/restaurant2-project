import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { FC } from 'react';
import { LoadingComponent } from '../components/LoadingComponent';

type Props = {
    children: React.ReactNode,
 };
 
export const PrivateRoute: FC<Props> = ({children}) => {
   
    const {user, status} = useAppSelector((state) => state.authReducer);
   if(status === 'checking'){
      return <LoadingComponent />
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