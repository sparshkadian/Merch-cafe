import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
      setCheckingStatus(false);
    });
  });

  return { isLoggedIn, checkingStatus };
};
