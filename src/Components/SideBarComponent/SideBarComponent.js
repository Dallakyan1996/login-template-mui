import * as React from 'react';
import Box from '@mui/material/Box';
import { sideBarArr } from './side_bar_arr';
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
        {
            sideBarArr.map((item) => {
                return <div style={{ display: "flex", alignItems: "center" }} key={Math.random() + new Date()}>
                    <NavLink activeclassname='is_active' to={item.route} style={styleSideBarItem}>
                        {item.icon}
                        <span style={{ paddingLeft: "10px", fontSize: "15px" }}>{item.name}</span>
                    </NavLink>
                </div>
            })
        }
    </Box>
}

export default SideBarComponent