/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { InputAdornment, TextField, Button, Typography, Grid } from '@mui/material';

import IconButton from '@mui/material/IconButton';
// import { ReactComponent as Logo } from '../images/Logo.svg';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

// Mobile Number
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="0000000000"
            definitions={{
                '#': /[1-9]/
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

function Register() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
        name: '',
        mobileNumber: '',
        role: ''
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // Password Modifier
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid>
            <Grid lg={4} md={8} xs={11} sx={{ mx: 'auto' }}>
                <h2 style={{ color: 'black', marginTop: 0, paddingTop: '0.83em', textAlign: 'center' }}>
                    <Link to="/">
                        <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                            {/* <Logo
                                style={{
                                    height: '4.3rem',
                                    width: '4.3rem',
                                    backgroundColor: 'white',
                                    borderRadius: '50%'
                                }}
                            /> */}
                        </IconButton>

                        <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontWeight: 900 }}>
                            Martopia
                        </Typography>
                    </Link>
                </h2>
                <Typography variant="h4">Create a new account for free </Typography>
                <form action="/martopia/user/register" method="post">
                    {/* <FormControl sx={{ m: 1 }} variant="outlined" action="/login" method="post"> */}
                    {/* Email */}
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        required
                        fullWidth
                        autoFocus="true"
                        sx={{ my: '1rem', mt: '2rem' }}
                    />

                    {/* Password */}
                    <TextField
                        label="Password"
                        helperText="Enter a 7 digit password"
                        type={values.showPassword ? 'text' : 'password'}
                        name="password"
                        value={values.password}
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end">
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}
                        required
                        sx={{ my: '1rem' }}
                        fullWidth
                        aria-describedby="outlined-password-helper-text"
                    />

                    {/* Name */}
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        name="name"
                        value={values.name}
                        required
                        fullWidth
                        sx={{ my: '1rem' }}
                        onChange={handleChange('name')}
                    />

                    {/* Mobile Number */}
                    <TextField
                        label="Mobile Number"
                        value={values.mobileNumber}
                        onChange={handleChange('mobileNumber')}
                        name="mobileNumber"
                        id="mobile-number"
                        InputProps={{
                            inputComponent: TextMaskCustom
                        }}
                        inputProps={{
                            type: 'tel',
                            minlength: '10',
                            maxlength: '10'
                        }}
                        fullWidth
                        sx={{ my: '1rem' }}
                        required
                    />

                    {/* Sign Up buttons */}
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        sx={{ mt: 2, fontSize: '1.15rem' }}>
                        Sign up
                    </Button>
                    <br />
                    <h4 style={{ textAlign: 'center' }}>
                        Have an account? <a href="/login">Log in</a>.
                    </h4>
                    {/* </FormControl> */}
                </form>
            </Grid>
        </Grid>
    );
}

export default Register;