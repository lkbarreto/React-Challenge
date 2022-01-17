import React, { createContext, useState, useContext } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    return (
        <AuthContext.Provider
            value={{
                movies, setMovies, page, setPage
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}