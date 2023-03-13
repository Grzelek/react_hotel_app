import {createContext} from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

AuthContext.displayName = 'AuthContext'

export default AuthContext;