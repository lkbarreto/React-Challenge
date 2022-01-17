import { Box } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import Card from "../Card/Card";
import { AuthContext } from "../../context/authProvider"
import { styles } from "./styles";

function Content() {
    const {
        movies,
        setMovies,
        page,
        setPage,
        apiUrl,
        setApiUrl, 
        numPages,
        setNumPages

    } = useContext(AuthContext);

    const handleChange = (event, value) => {
        setPage(value);
      };

    const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=562bbdb9e5d866e02bfec9eef5edd161&page="+page;



    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {setMovies(data.results); setNumPages(data.total_pages) });
    };

    useEffect(() => {
        console.log(movies)
        getMovies(apiUrl);
    }, [page]);
    return (
        <Box style={styles.main} >
            {movies.length != 0 && (<>
                    {movies.map((movie) => <Card  item={movie} key={movie.id} />)}
                </>)}
                <div style={styles.pagesContainer}>
                <Pagination style={styles.pages} page={page} onChange={handleChange} count={numPages} variant="outlined"  />
                </div>   
        </Box>
    );
}

export default Content;