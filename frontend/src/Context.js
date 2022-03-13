/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react';

const Dash = createContext();
const Sign = createContext();

const Context = ({ children }) => {
    const [dash, setDash] = useState(false);
    const [check, setCheck] = useState({
        signup: false,
        login: false,
        otp: false,
    });

    return (
        <Dash.Provider value={{ dash, setDash }}>
            <Sign.Provider value={{ check, setCheck }}> {children}
            </Sign.Provider>
        </Dash.Provider>
    );
};


export const DashState = () => {
    return useContext(Dash);
};
export const CheckState = () => {
    return useContext(Sign);
};


export default Context;
