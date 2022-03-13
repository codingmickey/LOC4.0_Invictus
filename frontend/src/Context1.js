/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react';

const Insta = createContext();

const Context1 = ({ children }) => {
    const [instaCheck, setInstaCheck] = useState(true)

    return (
        <Insta.Provider value={{ instaCheck, setInstaCheck }}>
            {children}
        </Insta.Provider>

    );
};


export const InstaCheck = () => {
    return useContext(Insta);
};



export default Context1;
