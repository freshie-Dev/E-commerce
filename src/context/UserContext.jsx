
import { createContext, useState, useContext } from "react";


const UserContext = createContext({});

const UserProvider = ({children}) => {
    const [loggedInUser, setLoggedInUser] = useState()
    
    return (
        <UserContext.Provider value={{
            loggedInUser,
            setLoggedInUser,
        }}>
            {children}
        </UserContext.Provider>
    )
}

const UserContextProvider = () => {
    return ( useContext(UserContext) )
};

export {UserProvider};
export default UserContextProvider;