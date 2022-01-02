import { useContext, createContext, useEffect, useState } from "react";
import { auth } from'../utils/init-firebase'

const AuthContext = createContext({
    currentUser: null,
})

export const useAuth = () => useContext(AuthContext)


export default function AuthContextProvider({children}){
    const [currentuser, setcurrentuser] = useState(null);

    const value={
        currentuser,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
