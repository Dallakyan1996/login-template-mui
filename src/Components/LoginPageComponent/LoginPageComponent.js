import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiService } from '../../API/API';
import { history } from '../helpers/history';

const LoginPageComponent = (props) => {
    let [error,setError] = useState("")
    let [loginObj, setLoginObj] = useState({
        validationPass: false,
        validationEmail: false,
        email: "",
        password: ""
    })

    // if (apiService.currentUserValue) {
    //     history.push({ from: { pathname: "/dashboard" } });
    // }
    useEffect(() => {
    }, [])

    return (
        <>
            <AppBar position="static" >
                <Toolbar sx={{ backgroundColor: "#365ab4", }}>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, height: "6rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        Page Name On Header
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh - 8rem"
            >
                <Box
                    centered
                    sx={{
                        width: 500,
                        height: 400,
                        marginTop: 20,
                        marginBottom: 5,
                        backgroundColor: 'white',
                        borderRadius: "10px",
                        boxShadow: "0 3px 6px rgb(0 0 0 / 16%)"
                    }}
                >
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                        justifyContent: "center",
                    }}>
                        <Stack spacing={5} direction="column">
                            <TextField error={(!loginObj.email && loginObj.validationEmail) ? true : false}
                                id="email"
                                label={(!loginObj.email && loginObj.validationEmail) ? "Email is required" : "Email"}
                                variant="outlined" onChange={(e) => {
                                    setLoginObj({
                                        ...loginObj,
                                        email: e.target.value,
                                        validationEmail: true
                                    })
                                }} />
                            <TextField
                                error={(!loginObj.password && loginObj.validationPass) ? true : false}
                                type="password" id="password"
                                label={(!loginObj.password && loginObj.validationPass) ? "Password is required" : "Password"}
                                variant="outlined" onChange={(e) => {
                                    setLoginObj({
                                        ...loginObj,
                                        password: e.target.value,
                                        validationPass: true
                                    })
                                }} />
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}>
                                <Button variant="contained" sx={{
                                    width: "10rem",
                                    height: "3rem"
                                }}
                                    onClick={() => {
                                        apiService.login(loginObj.email, loginObj.password).then((response) => {
                                            const { from } = { from: { pathname: "/" } };
                                            history.push(from);
                                        }).catch(e => setError(e))
                                    }}>Log In</Button>
                                    {error}
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </ >
    );
}

export default LoginPageComponent;