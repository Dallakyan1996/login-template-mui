import * as React from 'react';
import Box from '@mui/material/Box';
import { BiAperture } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import './side_bar.css'

const SideBarComponent = () => {
    const styleSideBarItem = {
        color: "white",
        textDecoration: "none",
        display: "flex",
        padding: "15px 0 15px 5px",
        alignItems: "center",
        width: "100%"
    }

    return <Box sx={{
        width: "10rem",
        height: "calc(100vh - 3.3rem)",
        backgroundColor: "#365ab4",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
    }}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink activeclassname='is_active' to="/" style={styleSideBarItem}>
                <BiAperture fill="white" style={{ fontSize: "15px" }} />
                <span style={{ paddingLeft: "10px", fontSize: "15px" }}>Home</span>
            </NavLink>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
            <NavLink activeclassname='active' to="/dashboard" style={styleSideBarItem}>
                <BiAperture fill="white" style={{ fontSize: "15px" }} />
                <span style={{ paddingLeft: "10px", fontSize: "15px" }}>Dashboard</span>
            </NavLink>
        </div>
    </Box>
}

export default SideBarComponent