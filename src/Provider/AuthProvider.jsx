/* eslint-disable react/prop-types */

import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Config/firebaseConfig";



export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const authInfo={
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;