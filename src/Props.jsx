import User from "./User";
import OnClickProp from'./OnClickProp'
import PropsForArray from'./PropsForArray'
import { useState } from "react";
const Props=()=>{
    let userObj1={
        usrName:'Raghav',
        usrAge:21,
        usrEmail:'raghav@test.com'
    }
    let userObj2={
        usrName:'kartik',
        usrAge:21,
        usrEmail:'kartik@test.com'
    }
    let userObj3={
        usrName:'yamal',
        usrAge:21,
        usrEmail:'yamal@test.com'
    }
    let arr=['pink','green','yellow','orange']
    const [student,updtStudent]=useState()
    return(
        <>
        
        <h1>Props</h1>
        <PropsForArray colourArr={arr}/>

        <User objData={userObj1}/>
        <User objData={userObj2}/>
        <User objData={userObj3}/>
        <br />
        <h1>on click prop</h1>
        {student && <OnClickProp usrName={student} />}
        <button onClick={()=>updtStudent('Raghav')}>student name</button>
        </>
    )
}
export default Props;