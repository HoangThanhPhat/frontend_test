import React, {useState, createContext}  from "react";

export const UserContext = createContext();

export const USerProvider = (props) => {
    const [user, setUsers] = useState({'data': []});

    return (
        <UserContext.Provider value = {[user, setUsers]}>
            {props.children}
        </UserContext.Provider>
    );
}
