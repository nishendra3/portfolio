import React from 'react'
import {
    Typography,
    Avatar,
    Grid,
    Box,
} from '@material-ui/core'

import Typed from 'react-typed'

import { makeStyles } from '@material-ui/core/styles'

import avatar from '../Assets/Images/Avatar.png'

// CSS Styles
const useStyles = makeStyles( theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },
    title: {
        color: 'tomato',
    },
    subtitle: {
        color: 'tan',
        marginBottom: '3rem',
    },
    typedContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        textAlign: 'center',
        zIndex: 1,
    },
}))



const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justifyContent="center">
                <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={['Nishi']} typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant="h5" align="center">
                <Typed 
                    strings={['Web Design', 'Web Development', 'MERN Stack']} 
                    typeSpeed={40} 
                    backSpeed={60} 
                    loop />
            </Typography>
        </Box>
    )
}

export default Header