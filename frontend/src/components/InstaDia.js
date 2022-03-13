/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { InstaCheck } from '../Context';
import axios from "axios";

const styles = {
    dialog: {
        height: '65%',
        // margin: '60%',
        boxShadow: 'none !important',
        borderRadius: '6px !important',
    },
}

const Insta = ({ classes }) => {

    const { instaCheck, setInstaCheck } = InstaCheck();
    const [username, setUsername] = useState()

    const handleChange = (e) => {
        const { value } = e.target
        setUsername(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let reqOptions = {
            url: "http://localhost:3001/api/artstore/users/register",
            method: "POST",
            "Content-Type": "application/json",
            data: ({

            }),
        }
        console.log(reqOptions)
        try {
            const response = await axios.request(reqOptions)
            console.log(response.data)
            if (response.data.success) {

                setInstaCheck(false)
                setUsername('')
            }

        } catch (error) {

        }
    }

    return (
        <>
            <Dialog
                open={instaCheck}
                classes={{ paper: classes.dialog }}
                maxWidth='xs'
                fullWidth={true}
                onClose={() => setInstaCheck(false)}
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
                        Instagram
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth={true} >
                            <TextField
                                id="name"
                                label="Full Name"
                                variant="outlined"
                                value={username}
                                onChange={handleChange}
                                error={false}
                                sx={{
                                    marginY: 3
                                }}
                            />
                            <TextField
                                id="username"
                                label="Username"
                                variant="outlined"
                                value={username}
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
                            >Proceed
                            </Button>
                        </FormControl>
                    </form>

                </Box>
            </Dialog>
        </>
    );
}

export default withStyles(styles)(Insta);