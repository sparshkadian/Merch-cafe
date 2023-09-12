import { createContext } from 'react';

const UserContexts = createContext();

export const UserProvider = ({ children }) => {
  const addUser = async (user) => {
    const response = await fetch('http://localhost:7000/api/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  };

  return (
    <UserContexts.Provider value={{ addUser }}>
      {children}
    </UserContexts.Provider>
  );
};

export default UserContexts;
