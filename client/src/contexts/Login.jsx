import { createContext } from "react";

const Login = ({children}) =>{
    const [logged, setlogged] = useState(false)
    const User = createContext(logged);
    <User.Provider value={logged}>
        {children}
    </User.Provider>
}