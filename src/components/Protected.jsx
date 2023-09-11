import { useAuthStatus } from './../hooks/useAuthStatus';
import Spinner from './../components/Spinner';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const { isLoggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return <Spinner />;
  } else return isLoggedIn ? children : <Navigate to='/login' />;
};

export default Protected;
