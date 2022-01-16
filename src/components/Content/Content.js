import { Box } from "@mui/material";
import React, { useState, useContext } from "react";
import {Link} from "react-router-dom";
import Card from "../Card/Card";
import { styles } from "./styles";

function Content() {

    const json={}
    return (
        <Box style={styles.main} >
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </Box>
    );
}

export default Content;