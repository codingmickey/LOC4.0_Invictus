/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { GoogleLoginButton } from "react-social-login-buttons";
import { CheckState } from '../Context';
import axios from "axios";
// import GoogleButton from 'react-google-button'
// import { Link, useHistory } from "react-router-dom";
const styles = {
    dialog: {
        height: '65%',
        // margin: '60%',
        boxShadow: 'none !important',
        borderRadius: '6px !important',
    },
}

const SignUp = ({ classes }) => {

    const { check, setCheck } = CheckState();
    console.log(check);
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setData(pre => {
            return {
                ...pre,
                [id]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email } = e.target
        console.log(email.value)
        // const { username, email, password, phone } = data 

        let reqOptions = {
            url: "http://localhost:3001/api/artstore/users/register",
            method: "POST",
            "Content-Type": "application/json",
            data: ({
                "name": name.value,
                "email": email.value
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
                        'signup': false,
                        'otp': true
                    }
                })
                setData({
                    name: '',
                    email: ''
                })
            }

        } catch (error) {

        }
    }

    return (
        <>
            <Dialog
                open={check.signup}
                classes={{ paper: classes.dialog }}
                maxWidth='xs'
                fullWidth={true}
                onClose={() => setCheck((pre) => {
                    console.log(check)
                    return {
                        ...pre,
                        'signup': false
                    }
                })}
            >
                <Box sx={{ paddingX: 3 }}>
                    <Typography variant='h5' component='h2'
                        sx={{
                            paddingTop: 2,
                            fontWeight: 'medium',
                            fontFamily: 'Roboto',
                            letterSpacing: 1
                        }}
                    >
                        Sign up
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth={true} >
                            <TextField
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                value={data.name}
                                onChange={handleChange}
                                error={false}
                                sx={{
                                    marginY: 3
                                }}
                            />
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                value={data.email}
                                onChange={handleChange}
                                error={false}
                                sx={{
                                    // marginX: 3
                                }}
                            />
                            <Button variant="contained" size="large" color='secondary'
                                sx={{
                                    marginY: 3
                                }}
                                type="submit"
                            >Create Account
                            </Button>
                        </FormControl>
                    </form>

                    <Typography variant='h6' component='p' >
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

                    <Typography variant='h6' component='p' marginTop={3}>
                        Already have an account ? Log in
                    </Typography>
                </Box>
            </Dialog>
        </>
    );
}

export default withStyles(styles)(SignUp);