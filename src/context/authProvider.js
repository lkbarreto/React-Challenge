import React, { createContext, useState, useContext } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);


    return (
        <AuthContext.Provider
            value={{
                movies, setMovies
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}