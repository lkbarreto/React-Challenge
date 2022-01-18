import React, { useState, useContext } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { AuthContext } from "../../context/authProvider"
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { TextField } from "@mui/material";
import { styles } from "./style";

function DrawerComponent(props) {
    const theme = useTheme();
    const {
        setMovies,
        page,
        setPage,
        apiUrl,
        setApiUrl,
        setNumPages
    } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const SEARCH_API =
        "https://api.themoviedb.org/3/search/movie?&api_key=562bbdb9e5d866e02bfec9eef5edd161&query=";

    const handleOnChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const searchMovies = ()=>{
        setPage(1)
        setApiUrl(SEARCH_API+searchTerm+"&page=");
        
        fetch(SEARCH_API+searchTerm+"&page="+page)
            .then((res) => res.json())
            .then((data) => {
                setNumPages(data.total_pages);
                setMovies(data.results)});
    };

    const clear = async()=>{
        setSearchTerm("");
        setPage(1);
        setApiUrl("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=562bbdb9e5d866e02bfec9eef5edd161&page=");
        await fetch(apiUrl+page)
            .then((res) => res.json())
            .then((data) => {
                setNumPages(data.total_pages);
                setMovies(data.results)});
    };

    return (
        <div >
            <Drawer
                style={styles.drawer}
                sx={{
                    width: props.drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: props.drawerWidth,
                        boxSizing: 'border-box',
                    },
                    borderRightWidth: 0
                }}
                variant="persistent"
                anchor="left"
                open={props.open}
            >
                <DrawerHeader>
                    <IconButton onClick={props.handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={styles.icon} /> : <ChevronRightIcon style={styles.icon} />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <div style={styles.form}>
                    <TextField style={styles.input} size="small" label="Name" variant="outlined" value={searchTerm}
                        onChange={handleOnChange} />

                    <TextField style={styles.input} size="small" label="Category" variant="outlined" />

                    <TextField style={styles.input} size="small" label="Range" variant="outlined" />

                    <Button disabled={searchTerm === ""} variant="contained" style={styles.button} onClick={searchMovies} endIcon={<FilterAltIcon />}>
                        Filter
                    </Button>

                    <Button  variant="outlined" style={styles.button} onClick={clear} >
                        Clear
                    </Button>
                </div>


            </Drawer>
        </div>
    );
}

export default DrawerComponent;