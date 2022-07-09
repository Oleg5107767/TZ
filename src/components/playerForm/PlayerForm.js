import React,{useState} from "react";
import { useDispatch} from 'react-redux';
import { Portal, Button, Grid, Container ,Box} from '@material-ui/core';
import { playerName } from '../../actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    top: '0',
    left: '0',
    paddingTop: '50px',          
  },

  box:{
    display: 'inline-flex',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '10px',
  },
  inputName: {
    width: '200px',
    boxShadow: 'none',
    outline: 'none',
    border: '1px solid silver',
    borderRadius: '5px',
    fontSize: '20px',
    margin: '20px 0 20px 0'
  },
  button:{
    height: '25px',
    backgroundColor: 'white',
    border: '1px solid silver',
    margin: '20px 0 20px 0',
    fontWeight: 'bold'
  },
  text:{
    color:'black',
    padding: '16px',
  },
});

const initialValue ={
    user : 'Player',
    userSecond : 'Player 2',
}


const PlayerForm = () => {
  const [users,setUsers] = useState(initialValue);
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();
  const classes = useStyles();




  const handleName = (e) => {
    e.preventDefault();
    const {name,value} = e.target;
   
    setUsers({ 
          ...users,
          [name]:  value,
        })
  }



  const savedNames = () => {
    
      dispatch(playerName(users));
      setShow(false);
  }

    return(  
        <>
          {show ? (
            <Portal >
              <Container 
                className={classes.root}
                maxWidth="xl"
              >
                <Grid
                 container
                 spacing={0}
                 direction="column"
                 justifyContent="flex-end"
                 alignItems="center"
                 >
                  <Box className={classes.box}>
                    <Grid
                      container
                      spacing={0}
                      direction="column"
                      alignItems="center"
                    >
                      <Grid>
                        <h1 className={classes.text}>Welcome to Tic-Tac-Toe</h1>
                      </Grid>
                    <Grid 
                      container
                      spacing={0}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid>
                        <h3 className={classes.text}>Player   </h3>
                      </Grid> 
                      <Grid>
                        <input
                          className={classes.inputName} 
                          onChange={ e => handleName(e)}
                          name='user'
                          placeholder='please choose name'
                        />
                      </Grid>
                    </Grid>
                    <Grid 
                      container
                      spacing={0}
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid>
                        <h3 className={classes.text}> Player 2 </h3>
                      </Grid>
                      <Grid>
                        <input 
                          className={classes.inputName}
                          onChange={e => handleName(e)}
                          name='userSecond'
                          placeholder='please choose name'
                        />
                        </Grid>
                    </Grid>
                    <Grid>
                      <Button onClick={savedNames} className={classes.button}>START</Button>
                    </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Container>
            </Portal> 
            ) : null}
        </>
    )
}
export default PlayerForm;