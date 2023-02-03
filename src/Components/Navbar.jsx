import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    ListItem,
    ListItemText,
    ListItemIcon, 
    Avatar,
    Divider,
    List,
    Typography,
    Box,
} from '@material-ui/core'

import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    MenuRounded,
} from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import avatar from '../Assets/Images/Avatar.png'

// import MobileRightMenuSlider from '@material-ui/core/Drawer'
import Footer from './Footer'

// CSS Styles
const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%',
    },
    avatar: {
        display: 'block',
        margin: '0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    listItem: {
        color: 'tan',
    },
    iconWrapper: {
        color: 'tan',
    },
      

}))

const menuItems = [
    {   
        listIcon: <Home />,
        listText: 'Home',
        listPath: '/',
    },
    {
        listIcon: <AssignmentInd />,
        listText: 'Resume',
        listPath: '/resume',
    },
    {
        listIcon: <Apps />,
        listText: 'Portfolio',
        listPath: '/portfolio',
    },
    {
        listIcon: <ContactMail />,
        listText: 'Contacts',
        listPath: '/contacts',
    },
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box 
        className={classes.menuSliderContainer} 
        component="div"
        onClick={toggleSlider(slider, false)}
        >
        <Avatar className={classes.avatar} src={avatar} alt="Nishi" />
        <Divider />
        <List>
            {menuItems.map((lsItem, key) => (
                <ListItem button key={key} component={Link} to={lsItem.listPath}>
                    <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText className={classes.listItem} primary={lsItem.listText} />
                </ListItem>
            ))}
        </List>
        </Box>
    )

    return (
        <>
        
        <Box component="nav">
            <AppBar position="static" style={{ background: 'tomato', opacity: '0.8' }}>
                <Toolbar
                style={{ backgroundColor: '#222', opacity: '0.8' }}
                >
                    <IconButton 
                    className={classes.iconWrapper}
                    onClick={toggleSlider("right", true)}>
                        <MenuRounded style={{ color: 'tan' }} />
                    </IconButton>
                    <Typography variant="h5" style={{ color: 'tan' }}>
                        Red Beans
                    </Typography>
                    <MobileRightMenuSlider
                        anchor="left"
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                        <Footer />
                    </MobileRightMenuSlider>

                </Toolbar>
            </AppBar>
        
        </Box>
        </>
    )
}

export default Navbar