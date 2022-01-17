import { Box } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { AuthContext } from "../../context/authProvider"
import { styles } from "./styles";

const FEATURED_API =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=562bbdb9e5d866e02bfec9eef5edd161";
const SEARCH_API =
    "https://api.themoviedb.org/3/search/movie?&api_key=562bbdb9e5d866e02bfec9eef5edd161&query=";


function Content() {
    const {
        movies,
        setMovies
    } = useContext(AuthContext);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setMovies(data.results));
    };

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);


    return (
        <Box style={styles.main} >

            {
                movies.length != 0 && (<>
                    {movies.map((movie) => <Card  item={movie} key={movie.id} />)}
                </>)}

        </Box>
    );
}

export default Content;