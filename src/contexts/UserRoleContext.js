
import React, { createContext, useState } from 'react';

export const UserRoleContext = createContext({
  role: 'global',           
  setRole: () => {}         
});

export function UserRoleProvider({ children }) {
  const [role, setRole] = useState('global');
  return (
    <UserRoleContext.Provider value={{ role, setRole }}>
      {children}
    </UserRoleContext.Provider>
  );
}
