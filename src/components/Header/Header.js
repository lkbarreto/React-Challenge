import React, { useState, useContext } from "react";
import { styled, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
function Header(props) {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${props.drawerWidth}px)`,
            marginLeft: `${props.drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <div className="Index">
            <AppBar sx={{ backgroundColor: 'red' }} position="fixed" open={props.open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
                    >
                        <MenuIcon color='primary' />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Houm
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Header;