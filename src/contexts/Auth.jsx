import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [placa, setPlaca] = useState(null);

  function getPlaca(placa) {
    setPlaca(placa);
  }

  return (
    <AuthContext.Provider value={{ getPlaca, placa }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
