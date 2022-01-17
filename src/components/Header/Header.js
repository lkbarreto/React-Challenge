import React from "react";
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { styles } from "./style";
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
            <AppBar style={styles.header} position="fixed" open={props.open}>
                <Toolbar>
                    <IconButton

                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(props.open && { display: 'none' }) }}
                    >
                        <MenuIcon style={styles.icon} color='primary' />
                    </IconButton>

                    <img
                        alt="IMG"
                        src="https://theme.zdassets.com/theme_assets/10103841/9a0aa0049d2e44a0274970c2a888d2b831155d73.png"
                        height={60}
                        loading="lazy"
                    />
                </Toolbar>
            </AppBar>

        </div>
    );
}

export default Header;