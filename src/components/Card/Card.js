import React, { useState } from "react";
import Card from '@mui/material/Card';
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
                    height={369}
                    image={IMAGE_API + props.item.poster_path}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src="https://cloc.condesan.org/intranet/wp-content/plugins/learnpress/assets/images/no-image.png";
                      }}
                    alt=""
                />
                <Fab onClick={() => { setExpanded(!expanded) }} style={styles.floatButton}>
                    <VisibilityIcon />
                </Fab>
                <CardContent>
                    <Rating style={styles.rating} name="size-normal" precision={0.5} readOnly max={10} value={props.item.vote_average} size="small" />
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