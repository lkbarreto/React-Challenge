import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { TextField } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import { styles } from "./style";

function DrawerComponent(props) {
    const theme = useTheme();
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <div className="Drawer">
            <Drawer
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
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                


                <Divider />
                
            </Drawer>
        </div>
    );
}

export default DrawerComponent;