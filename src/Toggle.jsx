import { useState } from 'react';
const Toggle=()=>{
    const name='Raghav';
    const [display,setDisplay]=useState(true)
    const [count,incCount]=useState(0);
    return(
        <>
            <h1>Toggle Space</h1>
            {
                display?<h1>{name}</h1>:<h1>Null</h1>
            }
            <button onClick={()=>setDisplay(!display)}>Alter</button>

            <h1>Condiitonal Counter</h1>
            <h1>count rn:{count}</h1>
            <button onClick={()=>incCount(count+1)}>Count++</button> 
            {
                count==0?<h1>condition 0</h1>
                :count==1?<h1>condition 1</h1>
                :count==2?<h1>condition 2</h1>
                :count==3?<h1>condition 3</h1>
                :count==4?<h1>condition 4</h1>
                :null
            }

        </>
    )

} 
export default Toggle;