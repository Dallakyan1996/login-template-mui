import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Menu, MenuItem } from "@material-ui/core";
import { apiService } from '../../API/API';

const HeaderComponent = () => {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Toolbar disableGutters sx={{
            flexGrow: 0, minHeight: "42px !important", padding: "10px  10px 0 10px", width: "100%",
            alignItems: "center !important", backgroundColor: "white", display: "flex", justifyContent: "space-between"
        }}>
            <img src="https://a1at.studymonitoring.net/img/logo/PCT-Logo.svg" alt="PCT logo"></img>
            <Typography variant="h6" sx={{ color: "#365ab4", marginLeft: "15px", }}>DCR-A1AT-201: Conditional Follow-Up Portal</Typography>
            <IconButton onClick={handleOpenUserMenu} sx={{ borderRadius: "0", backgroundColor: 'transparent', paddingRight: "30px !important" }}>
                <Typography sx={{ paddingRight: "10px", color: "#365ab4", fontSize: "18px" }}>User Name</Typography>
                <Avatar sx={{
                    width: "35px",
                    height: "35px"
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
                <MenuItem sx={{ position: "absolute", }}
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