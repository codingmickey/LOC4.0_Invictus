/* eslint-disable prettier/prettier */

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ListItemButton, Typography } from '@mui/material';
// import { useState } from 'react';
// import { DashState } from '../Context';

import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HomeIcon from '@mui/icons-material/Home';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { DashState } from '../Context'


// import { withStyles } from '@mui/styles';
// import { useState } from 'react';
// const styles = {
//     dash: {
//         // marginTop: '4',
//         // height: '95%',
//         // // marginTop: '10%  !important',
//         // // boxShadow: 'none !important',
//         // // borderRadius: '0 !important',
//         '&.MuiDrawer-paper': {
//             Top: 30
//         }
//     }
// }



const Dashboard = () => {
    // const [state, setState] = useState(false);
    const { dash, setDash } = DashState()

    const toggleDrawer = () => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDash(false);
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, }}
            role="presentation"
            onClick={toggleDrawer()}
            onKeyDown={toggleDrawer()}
        >
            <Typography variant='h6' component='h2' sx={{ marginTop: 2, marginBottom: 1, marginLeft: 2 }}>
                Channels
            </Typography>
            <Divider />
            <List>
                {/* {['Home', 'Options', 'Onboarding', 'Publishing'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem> */}
                {/* ))} */}
                {/* <ListItemButton >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton > */}
                {/* <ListItemIcon>
                        <SwitchAccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="Options" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Onboarding" />
                </ListItemButton> */}
                <ListItemButton  >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Publishing" />
                </ListItemButton>
                <ListItemButton >
                    <ListItemIcon>
                        <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Analytics" />
                </ListItemButton>

            </List>
            <Divider />
            <List>
                {/* {['Instagram', 'LinkedIn', 'Twitter'].map((text, index) => (
                    <ListItem button key={text} onClick={() => console.log(text)}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
                <ListSubheader component="div" sx={{ paddingRight: 15 }} inset>
                    Channels
                </ListSubheader>
                <ListItemButton>
                    <ListItemIcon>
                        <InstagramIcon />
                    </ListItemIcon>
                    <ListItemText primary="Instagram" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <TwitterIcon />
                    </ListItemIcon>
                    <ListItemText primary="Twitter" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <>
            <Box >
                <SwipeableDrawer
                    anchor='left'
                    open={dash}
                    onClose={toggleDrawer()}
                >   <div style={{ display: 'flex', Top: "65px" }}>

                        {list('left')}
                    </div>
                </SwipeableDrawer>
            </Box>
        </>
    );
}

export default Dashboard