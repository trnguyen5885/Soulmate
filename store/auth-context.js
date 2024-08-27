import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    token: '',
    isAuthenticated: false,
    authentication: (token) => {},
    logout: () => {}
});

function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState();
    
    

    function authentication(token) {
        setAuthToken(token)
        AsyncStorage.setItem('token', token)
    }

    function logout() {
        setAuthToken(null)
    }

    const values = {
        token: authToken,
        isAuthenticated: !!authToken,
        authentication: authentication,
        logout: logout

    }


    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;