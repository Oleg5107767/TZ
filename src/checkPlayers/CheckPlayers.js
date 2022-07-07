import { useSelector} from 'react-redux';
import { Container, Grid, Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        color: 'white'
    }
});
const CheckPlayers = () => {

    const {players, winPlayer, winPlayerSecond} = useSelector(state => state);
    const {user, userSecond} = players;
    const classes = useStyles();
    return(
        
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Grid>
                    <h1 className={classes.root}>Score</h1>
                </Grid>
                <Grid>
                    <h1 className={classes.root}>{user}: {winPlayer}</h1>
                </Grid>
                <Grid>
                    <h1 className={classes.root}>{userSecond}: {winPlayerSecond}</h1>
                </Grid>
            </Grid>
       
    )
}

export default CheckPlayers;