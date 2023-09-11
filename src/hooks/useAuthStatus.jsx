import { useAuth, onAuthStateChanged, getAuth } from 'firebase/auth';
import { useState } from 'react';

export const useAuthStatus = () => {
  const auth = getAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    }
    setCheckingStatus(false);
  });
  return { isLoggedIn, checkingStatus };
};
