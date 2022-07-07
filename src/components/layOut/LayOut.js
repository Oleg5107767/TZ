import GameBoard from "../gameBoard/GameBoard";
import PlayerForm from "../playerForm/PlayerForm";
import CheckPlayers from "../../checkPlayers/CheckPlayers";
import {Container, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: 'auto',
    background: '#545f7d',
    padding: '20px',
    margin: '0'
    },
  });
const LayOut = () => {
  
    const classes = useStyles();
    const startGame = <PlayerForm/>;
  //  const game = !startGame ? : 
   // const gameProcess =
  
    return(
        <Container className={classes.root}>
            <PlayerForm/>
            <Grid 
                container
                spacing={0}
                direction="row"
                justify="center"
            >
                <Grid item lg={5}>
                    <GameBoard/>
                </Grid>
                <Grid item lg={5}>
                    
                    <CheckPlayers/>
                </Grid>
            </Grid>
        </Container>
    )
}
export default LayOut;