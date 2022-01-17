import { Box } from "@mui/material";
import React, {  useContext, useEffect } from "react";
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
        numPages,
        setNumPages

    } = useContext(AuthContext);

    const handleChange = (event, value) => {
        setPage(value);
        getMovies(apiUrl+page);
      };


    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {setMovies(data.results); setNumPages(data.total_pages) });
    };

    useEffect(() => {
        fetch(apiUrl+page)
            .then((res) => res.json())
            .then((data) => {setMovies(data.results); setNumPages(data.total_pages) });
    }, [page, apiUrl, setMovies, setNumPages]);
    return (
        <Box style={styles.main} >
            {movies.length !== 0 && (<>
                    {movies.map((movie) => <Card  item={movie} key={movie.id} />)}
                </>)}
                <div style={styles.pagesContainer}>
                <Pagination style={styles.pages} page={page} onChange={handleChange} count={numPages} variant="outlined"  />
                </div>   
        </Box>
    );
}

export default Content;