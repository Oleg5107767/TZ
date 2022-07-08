import GameBoard from "../gameBoard/GameBoard";
import CheckPlayers from "../checkPlayers/CheckPlayers";
import {Container, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: 'auto',
        background: '#545f7d',
        padding: '20px ',
    },
  });

const Game = () => {

    const classes = useStyles();
    return(
        <Container 
        className={classes.root} 
        maxWidth="xl"
    >
        <Grid 
            container
            spacing={0}
            direction="row"
            justify="center"
        >
            <Grid item lg={4}>
                <GameBoard/>
            </Grid>
            <Grid item lg={6}>
                <CheckPlayers/>
            </Grid>
        </Grid>
    </Container>
    )
}
export default Game;