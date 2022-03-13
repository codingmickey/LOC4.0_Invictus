/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { CheckState } from '../Context';
import axios from "axios"

const styles = {
    dialog: {
        height: '55%',
        // margin: '60%',
        boxShadow: 'none !important',
        borderRadius: '6px !important',
    },
}


const Otp = ({ classes }) => {

    const { check, setCheck } = CheckState();
    const [otp, setOtp] = useState()

    const handleChange = (e) => {
        const { value } = e.target
        console.log(value);
        setOtp(value)
    }

    const handleClick = async (e) => {
        console.log(e);
        let reqOptions = {
            url: "http://localhost:3001/api/artstore/users/register/otpCheck",
            // url: "http://localhost:3001/api/artstore/users/register",
            method: "POST",
            "Content-Type": "application/json",
            data: ({
                otp: otp
            }),
        }
        console.log(reqOptions)
        console.log('b')
        try {
            const response = await axios.request(reqOptions)
            console.log(response.data)
            if (response.data.success) {

                setCheck((pre) => {
                    return {
                        ...pre,
                        'otp': false
                    }
                })
                setOtp()
            }

        } catch (error) {

        }
        // let bodyContent = JSON.stringify({
        //     "otp": "513863" 
        // let reqOptions = {
        //     method: "POST",
        //     headers: headersList,
        //     body: bodyContent,
        // }


    }

    return (
        <>
            <Dialog
                open={check.otp}
                classes={{ paper: classes.dialog }}
                maxWidth='xs'
                fullWidth={true}
                onClose={() => setCheck((pre) => {
                    console.log(check)
                    return {
                        ...pre,
                        'otp': false
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
                        Enter OTP
                    </Typography>
                    <Typography variant='body1' component='p'
                        sx={{
                            letterSpacing: 1,
                            marginTop: 5,
                            textAlign: 'center'
                        }}>
                        Verification code has been sent to your email, d*****a@da.fda, please enter the same here to complete the signup. Valid for 10 minutes.
                    </Typography>
                    <FormControl fullWidth={true} >
                        <TextField
                            id="name"
                            placeholder="OTP"
                            variant="outlined"
                            value={otp}
                            onChange={handleChange}
                            error={false}
                            sx={{
                                marginY: 3
                            }}
                        />

                        <Button variant="contained" size="large" color='secondary'
                            // sx={{
                            //     marginY: 3
                            // }}
                            onClick={handleClick}
                        >Procced
                        </Button>
                    </FormControl>
                    <Typography variant='body1' component='p'
                        sx={{
                            letterSpacing: 1,
                            marginTop: 5,
                            textAlign: 'center'
                        }}>Didn't receive OTP? Resend Now
                    </Typography>
                </Box>
            </Dialog>
        </>
    )
}

export default withStyles(styles)(Otp);