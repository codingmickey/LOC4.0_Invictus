/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// import * as React from 'react';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import NotificationsIcon from '@mui/icons-material/Notifications';

// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import ListSubheader from '@mui/material/ListSubheader';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import AnalyticsIcon from '@mui/icons-material/Analytics';
// import HomeIcon from '@mui/icons-material/Home';
// import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

// // import { mainListItems, secondaryListItems } from './listItems';

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open'
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen
//         })
//     })
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme, open }) => ({
//         '& .MuiDrawer-paper': {
//             position: 'relative',
//             whiteSpace: 'nowrap',
//             width: drawerWidth,
//             transition: theme.transitions.create('width', {
//                 easing: theme.transitions.easing.sharp,
//                 duration: theme.transitions.duration.enteringScreen
//             }),
//             boxSizing: 'border-box',
//             ...(!open && {
//                 overflowX: 'hidden',
//                 transition: theme.transitions.create('width', {
//                     easing: theme.transitions.easing.sharp,
//                     duration: theme.transitions.duration.leavingScreen
//                 }),
//                 width: theme.spacing(7),
//                 [theme.breakpoints.up('sm')]: {
//                     width: theme.spacing(9)
//                 }
//             })
//         }
//     })
// );

// const mdTheme = createTheme();

// export default function DashboardDrawer() {

//     const [open, setOpen] = React.useState(true);
//     const toggleDrawer = () => {
//         setOpen(!open);
//     };

//     return (
//         <>
//             <ThemeProvider theme={mdTheme}>
//                 <Box sx={{ display: 'flex' }}>
//                     <CssBaseline />

//                     <Drawer variant="permanent" open={open}>
//                         <Toolbar
//                             sx={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'flex-end',
//                                 px: [1]
//                             }}>
//                             <IconButton onClick={toggleDrawer}>
//                                 <ChevronLeftIcon />
//                             </IconButton>
//                         </Toolbar>
//                         <Divider />
//                         <List component="nav">

//                             <Divider sx={{ my: 1 }} />

//                         </List>
//                     </Drawer>
//                     <Box
//                         component="main"
//                         sx={{
//                             backgroundColor: (theme) =>
//                                 theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
//                             flexGrow: 1,
//                             height: '100vh',
//                             overflow: 'auto'
//                         }}>
//                         <Toolbar />
//                     </Box>
//                 </Box>
//             </ThemeProvider>
//         </>
//     );
// }

