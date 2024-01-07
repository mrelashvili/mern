import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: '',
  token: null,
  login: () => {},
  logout: () => {},
});
