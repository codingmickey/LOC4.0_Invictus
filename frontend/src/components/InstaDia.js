/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Box, Button, Divider, FormControl, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { withStyles } from '@mui/styles';
import { useState } from 'react';
import { InstaCheck } from '../Context1';
// import { accountPublicData } from '../api/Insta';
import axios from 'axios'

const styles = {
    dialog: {
        height: '30%',
        // margin: '60%',
        boxShadow: 'none !important',
        borderRadius: '6px !important',
    },
}

const Insta = ({ classes }) => {

    const { instaCheck, setInstaCheck } = InstaCheck();
    const [username, setUsername] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setUsername(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let options = {
            method: 'GET',
            url: 'https://instagram-data4.p.rapidapi.com/api/account/public/' + username,
            headers: {
                'x-rapidapi-key': '3ea1f76d19msh440d0c5afc3577cp12bcb8jsnff1769f87195',
                'x-rapidapi-host': 'instagram-data4.p.rapidapi.com'
            }
        };
        try {

            const response = await axios.request(options)
            console.log(response)
            if (response) {
                console.log(response);
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