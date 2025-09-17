import { useState } from 'react';
const Toggle=()=>{
    const name='Raghav';
    const [display,setDisplay]=useState(true)
    return(
        <>
            <h1>Toggle Space</h1>
            {
                display?<h1>{name}</h1>:<h1>Null</h1>
            }
            <button onClick={()=>setDisplay()}>Alter</button>
        </>
    )

} 
export default Toggle;