import { getAuth, onAuthStateChanged } from 'firebase/auth';
import app from 'app/api/api.config';
import { useEffect, useState } from 'react';

export const useCurrentUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(getAuth(), (loggedInUser) => {
      if (loggedInUser) setUser(loggedInUser);
    });
  }, []);

  return {
    currentUser: user,
  };
};
