import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Fab from '@mui/material/Fab';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Collapse from '@mui/material/Collapse';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { styles } from "./style";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
function CardComponent(props) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="Card">
            <Card style={styles.card}>
                <CardMedia
                    component="img"
                    image={IMAGE_API + props.item.poster_path}
                    alt=""
                />
                <Fab onClick={() => { setExpanded(!expanded) }} style={styles.floatButton}>
                    <VisibilityIcon />
                </Fab>
                <CardContent>
                    <Rating name="size-small" precision={0.5} readOnly max={10} value={props.item.vote_average} size="small" />
                    <Typography align="center" noWrap gutterBottom style={styles.title} component="div">
                        {props.item.original_title}
                    </Typography>
                </CardContent>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Overview:</Typography>
                        <Typography align="justify" paragraph>
                            {props.item.overview}
                        </Typography>


                    </CardContent>
                </Collapse>

            </Card>

        </div>
    );
}

export default CardComponent;