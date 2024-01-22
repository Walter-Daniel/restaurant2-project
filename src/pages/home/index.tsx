import { useAppSelector } from "../../redux/hooks";


export const HomePage = () => {
  const isAuth = useAppSelector((state) => state.authReducer.isAuth);
  return (

    <div style={{ marginTop: '4rem' }}>
      {
        isAuth  ? 
                <h1>HOLAAAAAAAAAAAAAAAAAAAAA</h1>
                :
                <h1>False</h1>
      }
    </div>

  )
}
