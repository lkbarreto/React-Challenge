import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styles } from "./style";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
function CardComponent({ item }) {
    console.log(item.poster_path)
    return (
        <div className="Card">
            <Card center onClick={() => { console.log("...") }} style={styles.card}>
                <CardMedia
                    component="img"
                    image={IMAGE_API + item.poster_path}
                    alt=""
                />
                    <Fab  style={styles.floatButton}>
                        <VisibilityIcon />
                    </Fab>
                <CardContent>
                    <Typography  align="center" noWrap gutterBottom style={styles.title} component="div">
                        {item.original_title}
                    </Typography>
                </CardContent>

            </Card>

        </div>
    );
}

export default CardComponent;