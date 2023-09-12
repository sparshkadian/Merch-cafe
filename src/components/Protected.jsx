import { useAuthStatus } from './../hooks/useAuthStatus';
import { Navigate } from 'react-router-dom';
import Spinner from './../components/Spinner';

const Protected = ({ children }) => {
  const { isLoggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  } else return isLoggedIn ? children : <Navigate to='/login' />;
};

export default Protected;
