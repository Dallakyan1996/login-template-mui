import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { apiService } from '../../API/API';
import { history } from '../../utils/helpers/history';
import Alert from '@mui/material/Alert';

const LoginPageComponent = (props) => {
    let [errorText, setErrorText] = useState("")
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
                minHeight="100vh - 6rem"
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
                                    setErrorText("")
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
                                    setErrorText("")
                                    setLoginObj({
                                        ...loginObj,
                                        password: e.target.value,
                                        validationPass: true
                                    })
                                }} />
                            <Box sx={{
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                {errorText && <Stack sx={{ width: '100%', paddingBottom: "10px" }} spacing={2}>
                                    <Alert severity="error">{errorText}</Alert>
                                </Stack>}
                                <Button variant="contained" 
                                sx={{
                                    width: "10rem",
                                    height: "3rem"
                                }}
                                    onClick={() => {
                                        apiService.login(loginObj.email, loginObj.password).then((response) => {
                                            if (response.ok) {
                                                const { from } = { from: { pathname: "/" } };
                                                history.push(from);
                                            } else {
                                                setErrorText(response.statusText)
                                            }
                                        })
                                    }}>Log In</Button>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </ >
    );
}

export default LoginPageComponent;