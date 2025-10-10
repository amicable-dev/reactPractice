import { useState, useEffect } from 'react';

function Fetech() {
  const [data, setData] = useState("");

  useEffect(() =>{
    fetch('https://randomuser.me/api').then((res)=>res.json()).then((data)=>{setData(JSON.stringify(data, null, 2))}).catch((err)=>console.error(err))
  },[]);

  return (
    <>
      <h2>Api Data as String</h2>
      <p>{data}</p>
    </>
  );
}

export default Fetech;
