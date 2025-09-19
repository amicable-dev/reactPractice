import { useState } from "react";
import InputTask from "./InputTask";
const InputTaker=()=>{
    const [val,newVal]=useState('Default') 
    return (
        <>
        <h1>Input From The User</h1>
        <input placeholder="Enter your name" value={val} onChange={(event)=>newVal(event.target.value)} type="text" />
        <h3>{val}</h3>
        <button onClick={()=>newVal('')}>Clear</button>
        <InputTask/>
        </>
    )

}
export default InputTaker;