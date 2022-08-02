import * as React from 'react';
import Box from '@mui/material/Box';
import { BiAperture } from "react-icons/bi";
import { Link } from 'react-router-dom';
const SideBarComponent = () => {
    return <Box sx={{
        width: "10rem",
        height: "calc(100vh - 4rem)",
        backgroundColor: "#365ab4",
        display: "flex",
        flexDirection: "column",
    }}>
        <div style={{ display: "flex", padding: "7px", alignItems: "center" }}>
            <Link to="/dashboard" style={{ color: "white", textDecoration: "none", display: "flex", padding: "5px", alignItems: "center" }}>
                <BiAperture fill="white" style={{ fontSize: "20px" }} />
                <span style={{ paddingLeft: "10px" }}>Dashboard</span>
            </Link>
        </div>
        <div style={{ display: "flex", padding: "7px", alignItems: "center" }}>
            <Link to="/dashboard" style={{ color: "white", textDecoration: "none", display: "flex", padding: "5px", alignItems: "center" }}>
                <BiAperture fill="white" style={{ fontSize: "20px" }} />
                <span style={{ paddingLeft: "10px" }}>Dashboard</span>
            </Link>
        </div>
    </Box>
}

export default SideBarComponent