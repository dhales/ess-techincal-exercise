import React, { useContext, useState} from 'react';

import { Link } from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

import LogIn from '../LogIn/LogIn';
import { UserContext } from '../../state/context';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    }
}));

const MainMenu = () => {
    const classes = useStyles();
    const {user} = useContext(UserContext);
    const welcomeMessage = user.userName ? `Welcome! ${user.userName}.`: "Welcome! Please Login.";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isLoginModalOpen, setLoginModal] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleLoginModal = () => {
        setLoginModal(!isLoginModalOpen);
        handleClose();
    }

    const logInLinks = () => {
        if (user.auth) {
            return [
                <MenuItem onClick={handleClose} component={Link} to="/associates" key="associates">
                    Associates
                </MenuItem>
            ];
        }
        return <MenuItem onClick={toggleLoginModal} key="login">LogIn</MenuItem>;
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton
                        onClick={handleClick}
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {welcomeMessage}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} component={Link} to="/" key="home">Home</MenuItem>
                {logInLinks()}
            </Menu>

            <LogIn closeCallBack={toggleLoginModal} isOpen={isLoginModalOpen}/>
        </div>
    );
}

export default MainMenu;
