import React,{useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Portal, Button, Grid } from '@material-ui/core';
import { playerName, registeredPlayers } from '../../actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    top: '0',
    left: '0'
  },
  inputName: {
    width: '200px',
    boxShadow: 'none',
    //borderColor: 'white',
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
    color:'white',
    padding: '16px',
  },

});

const initialValue ={
    user : '',
    userSecond : '',

}
const PlayerForm = () => {
  const [users,setUsers] = useState(initialValue);
 // const [show, setShow] = useState(true);
  const {showRegisteredFlag} = useSelector(state => state);

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

    if(users.user === '' || users.userSecond === ''){
      alert('zapolni')
    }else{
      dispatch(playerName(users))
 
      dispatch(registeredPlayers())
    }
    
  }

    return(  
        <>
          {showRegisteredFlag ? (
            <Portal >
              <Grid
                container
                spacing={0}
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={classes.root}
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
                    <Grid item>
                      <h3 className={classes.text}>Player   </h3>
                    </Grid> 
                    <Grid item>
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
                  <Grid item>
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
            </Portal> 
            ) : null}
        </>
    )
}
export default PlayerForm;