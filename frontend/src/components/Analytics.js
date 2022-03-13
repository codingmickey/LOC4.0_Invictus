/* eslint-disable prettier/prettier */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import DashBoard from './Dashboard';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';

import Navbar from './Navbar';
import { Button, CardContent, Divider, Typography } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
import BlogCard from './BlogCard'

const Analytics = () => {
  return (
    <React.Fragment>
      <Navbar />
      <CssBaseline />
      <div>
        <h1 style={{ padding: '5% 0 0 12%', textAlign: 'left' }}>Good Afternoon, Kartik Jolapara</h1>
        <p style={{ padding: '0 0 0 12%' }}>
          <strong>
            <i>See all your metrics over here</i>{' '}
          </strong>
        </p>
      </div>

      <Container maxWidth="lg">
        <Container
          sx={{
            height: '40vh',
            padding: '1% 0 0 0',
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)'
          }}>
          <h2>Tweet summary</h2>
          <hr></hr>
          {/* <Box display="flex">
            <Typography variant='subtitle1'>
              Posts
            </Typography>
            <Typography variant='subtitle1'>
              0
            </Typography>
          </Box>
          <Box display="flex">
          </Box> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>Tweets</Typography>
                  <Typography variant='subtitle1'>12 </Typography>
                </Item>
              </Grid>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>Tweet Impressions</Typography>
                  <Typography variant='subtitle1'>1680</Typography>
                </Item>
              </Grid>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>profile visits</Typography>
                  <Typography variant='subtitle1'>593</Typography>
                </Item>
              </Grid>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>Mentions</Typography>
                  <Typography variant='subtitle1'>3</Typography>
                </Item>
              </Grid>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>Followers</Typography>
                  <Typography variant='subtitle1'>189</Typography>
                </Item>
              </Grid>
              <Grid item sx={4} md={4}>
                <Item>
                  <Typography variant='subtitle1'>Top follower</Typography>
                  <Typography variant='subtitle1'>4,766 followers</Typography>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container
          sx={{
            height: '40vh',
            padding: '1% 0 0 0',
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)'
          }}>
          <h2>Recent Posts</h2>
          <hr>

          </hr>
          <CardContent>
            <CardActions>
              <Button size="small" href={ }>Learn More</Button>
            </CardActions>
          </CardContent>
        </Container>
        <Container
          sx={{
            height: '100vh',
            padding: '1% 0 0 0',
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)'
          }}>
          <h2>Social Channels Overview </h2>
          {/* <hr></hr> */}
          <Divider />
          <Grid container spacing={2}>
            <Grid item sx={4} md={4}>
              <BlogCard />
            </Grid>
            <Grid item sx={4} md={4}>
              <BlogCard />
            </Grid>
            <Grid item sx={4} md={4}>
              <BlogCard />
            </Grid>
          </Grid>
        </Container>
        <Container
          sx={{
            height: '40vh',
            padding: '1% 0 0 0',
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)'
          }}>
          <h2>Recent Reports</h2>
          <hr></hr>
        </Container>
        <Container
          sx={{
            height: '40vh',
            padding: '1% 0 0 0',
            // values referencing scales defined in a theme
            color: 'primary',
            bg: 'lightgray',
            // raw CSS value
            boxShadow: '0 0 1px 3px rgba(0, 0, 0, .125)'
          }}>
          {' '}
          <h2>Blogs</h2>
          <hr></hr>
        </Container>
      </Container>
    </React.Fragment >
  );
};

export default Analytics;
