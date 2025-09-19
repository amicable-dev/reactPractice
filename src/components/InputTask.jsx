import { useState } from "react";

const InputTask=()=>{
{/*some of the states are created*/}
    const [inpName,newName]=useState();
    const [inpAge,newAge]=useState();
    const [inpEmail,newEmail]=useState();
    function handleKeyDown(event){
        if (event.key=='Enter') {
            console.log("Name :",inpName);
            console.log("Age :",inpAge);
            console.log("Email :",inpEmail);
        }
    }
    return(
        <>
        <h1>Input Task</h1>
        <input value={inpName} onKeyDown={handleKeyDown} onChange={(event)=>newName(event.target.value)} placeholder="Name" type="text" />
        <input value={inpAge} onKeyDown={handleKeyDown} onChange={(event)=>newAge(event.target.value)} placeholder="Age" type="text" />
        <input value={inpEmail} onKeyDown={handleKeyDown} onChange={(event)=>newEmail(event.target.value)} placeholder='Email' type="text" />
        <br />
        <button
        onClick={()=>{
        console.log("Name :",inpName)
        console.log("Age :",inpAge)
        console.log("Email :",inpEmail)}}
        >Enter
        </button>
        </>
    )
}
export default InputTask;