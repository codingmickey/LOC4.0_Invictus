import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Analytics = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <h1 style={{ padding: '5% 0 0 12%', textAlign: 'left' }}>Good Afternoon</h1>
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
          <h2>Total Posts</h2>
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
          <h2>Recent Posts</h2>s<hr></hr>
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
          <h2>Social Channels Overview </h2>
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
    </React.Fragment>
  );
};

export default Analytics;
