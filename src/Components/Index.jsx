import React, { useCallback } from 'react'
import Header from './Header'
import Navbar from './Navbar'



import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles' 
import { ParticleConfig } from '../Assets/Configs/Configs'


import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: '0.3'
    }
})

const Home = () => {
    const classes = useStyles();

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (
        <>
            <Particles
                className={classes.particlesCanva}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={ParticleConfig}
            />

            <Navbar />
            <Header />
        </>
    )
}

export default Home