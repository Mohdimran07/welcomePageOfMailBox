import React, {useState} from "react";

const MailBoxContext = React.createContext({
    token: '',
    isLoggedIn : false,
    login: (token) => {},
    
});

export const MailBoxContextProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedin = !!token;

    const loginHandler = (token) => {
        setToken(token);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedin,
        login: loginHandler,
    }

    return <MailBoxContext.Provider value={contextValue}>{props.children}</MailBoxContext.Provider>
}

export default MailBoxContext;