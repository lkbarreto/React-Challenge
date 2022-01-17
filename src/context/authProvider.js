import React, { createContext, useState } from "react";
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);
    const [apiUrl, setApiUrl] = useState("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=562bbdb9e5d866e02bfec9eef5edd161&page=");

    return (
        <AuthContext.Provider
            value={{
                movies, setMovies, page, setPage, apiUrl, setApiUrl, numPages, setNumPages
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}