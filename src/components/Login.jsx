import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';



function Login({setToken}) {
    const[username, setUsername] = useState();
    const[password, setPassword] = useState();

    return (
    <Grid position={'absolute'} alignContent='center'>
        <form>
            <label>
                <Typography>Username</Typography>
                <input type="text" onChange={e => setUsername(e.target.value)}/>
            </label>
            <label>
                <Typography>Password</Typography>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </Grid>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login