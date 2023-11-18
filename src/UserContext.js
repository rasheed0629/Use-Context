import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'john@example.com',
    },
   
  ]);

  const updateUser = (userId, updatedUser) => {
    const UserMapped = users.map((user, index) =>
      index === userId ? updatedUser : user
    );
    setUsers(UserMapped);
    console.log(UserMapped)
  };
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user, index) => index !== userId);
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, setUsers,updateUser,deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
