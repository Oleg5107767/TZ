import React,{useState} from "react";
import { useDispatch, useSelector} from 'react-redux';
import { Portal, Button, Grid } from '@material-ui/core';
import { playerName } from '../../actions';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
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
    margin: '20px 0 20px 0'
  }
});

const initialValue ={
    user : '',
    userSecond : '',

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

  console.log(users)

  const savedNames = () => {

    if(users.user === '' || users.userSecond === ''){
      alert('zapolni')
    }else{
      dispatch(playerName(users))
      setShow(false)
    }

  }
    return(  
        <>
          {show ? (
            <Portal >
              <Grid
                container
                spacing={0}
                direction="column"
                justify="center"
              >
                <Grid>
                  <input
                    className={classes.inputName} 
                    onChange={ e => handleName(e)}
                    name='user'
                    placeholder='please choose name'
                  />
                </Grid>
                <Grid>
                  <input 
                    className={classes.inputName}
                    onChange={e => handleName(e)}
                    name='userSecond'
                    placeholder='please choose name'
                  />
                </Grid>
                <Grid>
                  <Button onClick={savedNames} className={classes.button}>START</Button>
                </Grid>
              </Grid>
            </Portal> 
            ) : null}
               {/* <input 
                    onChange={ e => handleName(e)}
                    name='user'
                    placeholder='please choose name'
                >
                </input>
                <input 
                    onChange={e => handleName(e)}
                    name='userSecond'
                    placeholder='please choose name'
                >
                </input>
    <button onClick={registName}></button>*/}
        </>
    )
}
export default PlayerForm;