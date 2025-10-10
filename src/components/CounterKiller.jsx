import { useState } from "react";



function CounterKiller(){
    const [count,newCount]=useState(0);
    
return(
    <>
        <h1>counter={count}</h1>
        <button onClick={()=>{newCount(count+1)}}>count++</button>
    </>
)
}
export default CounterKiller;