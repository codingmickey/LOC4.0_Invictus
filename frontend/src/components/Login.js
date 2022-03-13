/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { GoogleLoginButton } from "react-social-login-buttons";
import { CheckState } from '../Context';
import axios from 'axios';

const styles = {
    dialog: {
        height: '55%',
        boxShadow: 'none !important',
        borderRadius: '6px !important',
    },
}


const Login = ({ classes }) => {


    const { check, setCheck } = CheckState();
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setEmail(value)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        // const { username, email, password, phone } = data 

        let reqOptions = {
            url: "http://localhost:3001/api/artstore/users/login",
            method: "POST",
            "Content-Type": "application/json",
            data: ({
                "email": email
            }),
        }
        console.log(reqOptions)
        try {
            const response = await axios.request(reqOptions)
            console.log(response.data)
            if (response.data.success) {

                setCheck((pre) => {
                    console.log(check)
                    return {
                        ...pre,
                        'login': false,
                        'otp': true
                    }
                }
                )
                useState('')
            }

        } catch (error) {

        }
    }



    return (
        <Dialog
            open={check.login}
            classes={{ paper: classes.dialog }}
            maxWidth='xs'
            fullWidth={true}
            onClose={() => setCheck((pre) => {
                console.log(check)
                return {
                    ...pre,
                    'login': false
                }
            })}
        >
            <Box sx={{ paddingX: 3 }}>
                <Typography variant='h4' component='h2'
                    sx={{
                        paddingTop: 2,
                        fontWeight: 'medium',
                        fontFamily: 'Roboto',
                        letterSpacing: 1
                    }}
                >
                    Log in
                </Typography>

                <FormControl fullWidth={true} >
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleChange}
                        error={false}
                        sx={{
                            marginTop: 3
                        }}
                    />
                    <Button variant="contained" size="large" color='secondary'
                        sx={{
                            marginY: 3
                        }}
                        onClick={handleClick}
                    >Send OTP
                    </Button>
                </FormControl>
                <Typography variant='h6' component='p' sx={{ marginX: 22 }}>
                    <Divider> Or
                    </Divider>
                </Typography>

                <GoogleLoginButton
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 'none',
                        border: '1px  #e6e6e6 solid',
                    }}
                >
                    <span>Continue with Google</span>
                </GoogleLoginButton>
                {/* <FacebookLoginButton>
                    <span>Continue with FaceBook</span>
                </FacebookLoginButton> */}

                <Typography variant='h6' component='p' marginTop={3}>
                    New to Web App? Create account
                </Typography>
            </Box>
        </Dialog>
    )
}

export default withStyles(styles)(Login)
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'
// import '../App.css';
// {/* <PhoneInput
//     country={'in'}
//     placeholder='Phone Number'
//     countryCodeEditable={false}
//     enableSearch={true}
//     value={number}
//     onChange={phone => setNumber(phone)}
//     // className={classes.inputPhone}
//     style={{
    //         marginTop: '30px',
    //     }}
// /> */}