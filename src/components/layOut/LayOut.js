
import PlayerForm from "../playerForm/PlayerForm";
import Game from "../game/Game";

import { useSelector} from 'react-redux';

const LayOut = () => {
    const {showRegisteredFlag} = useSelector(state => state);


  const content = showRegisteredFlag ? <PlayerForm/> : <Game/>
    return(
        <>
            {content}
        </>
        
       
    )
}
export default LayOut;