import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from "@material-ui/core";
import { apiService } from '../../API/API';
import { loginTokenStorage } from '../../utils/constants';

const HeaderComponent = () => {
    const [anchorElUser, setAnchorElUser] = useState(null);
    let userName = JSON.parse(localStorage.getItem(loginTokenStorage))?.user?.name
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Toolbar disableGutters sx={{
            flexGrow: 0, minHeight: "42px !important", paddingTop: "10px", width: "100%",
            alignItems: "center !important", backgroundColor: "white", display: "flex", justifyContent: "space-between"
        }}>
            <img style={{ width: "4rem" }} src="https://logo-download.com/wp-content/data/images/svg/Babylon.js-logo.svg" alt="PCT logo"></img>
            <Typography variant="h6" sx={{ color: "#365ab4", marginLeft: "15px", }}>Page Name On Header</Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ borderRadius: "0", backgroundColor: 'transparent', padding: "5px !important" }}>
                <Typography sx={{ paddingRight: "10px", color: "#365ab4", fontSize: "18px" }}>{userName}</Typography>
                <Avatar sx={{
                    width: "35px",
                    height: "35px",
                }}
                    alt="Remy Sharp" src="https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <MenuItem sx={{ position: "absolute", display: "flex" }}
                    onClick={() => {
                        apiService.logout()
                    }}>
                    <Typography textAlign="center" >Log Out</Typography>
                </MenuItem>
            </Menu>
        </Toolbar>
    );
};
export default HeaderComponent;