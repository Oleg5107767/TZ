import React from "react";
import PlayerForm from "../playerForm/PlayerForm";
import GameBoard from "../gameBoard/GameBoard";
import CheckPlayers from "../checkPlayers/CheckPlayers";
import {Container, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        background: '#545f7d',
        padding: '40px ',
        top: '0',
        left: '0',
        minHeight: '100vh',
    },
  }); 

const LayOut = () => {
    const classes = useStyles();
    
    return(
        <>
            <PlayerForm/> 
            <Container 
                className={classes.root} 
                maxWidth="xl"
            >
                <Grid 
                    container
                    spacing={0}
                    direction="row"
                    justifyContent="center"
                >
                    <Grid item lg={6}>
                        <GameBoard/>
                    </Grid>
                    <Grid item lg={6}>
                        <CheckPlayers/>
                    </Grid>
                </Grid>
            </Container>
        </>    
    )
}
export default LayOut;