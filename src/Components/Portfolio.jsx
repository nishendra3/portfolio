import Navbar from "./Navbar"

import { makeStyles } from "@material-ui/core/styles";

import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@material-ui/core";

const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: '#233',
        height: '100%',
    },
    cardContainer: {
        maxWidth: 345,
        margin: '3rem auto',
    },
}))



const Portfolio = () => {
    const classes = useStyles();

  return (
    <>
       <Box component="div" className={classes.mainContainer}>
              <Navbar />
              <Grid container justifyContent="center">
                {/** Project 1 */}
                <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://source.unsplash.com/random"
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>

                {/** Project 2 */}
                <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image="https://source.unsplash.com/random"
                            >

                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Button size="small" color="primary">
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                


                
            </Grid>
        </Box>


    </>
  )
}

export default Portfolio