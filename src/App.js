import Top from './Top.js';
import Content from './Content.js';
import Bottom from './Bottom.js';
import React from "react";
import Start from './Start.js';

export default function App(){

    const [zaps, setZaps] = React.useState([]);
    const [init, setInit] = React.useState(false)

    function setStart(){
        setInit(true)
    }


    function countZaps(newzap) {
      setZaps([...zaps, newzap]);
    }
    console.log(zaps)
    return (
<>
{init? ( <><Top /> <Content countZaps={countZaps}/> <Bottom zap={zaps}/> </>) : <> <Start setStart={setStart} /> </>}
</>
    
    )
}
