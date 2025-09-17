
const User=({objData})=>{
    return(
        <>
        <hr />
        <h1>name: {objData.usrName}</h1>
        <h1>age: {objData.usrAge}</h1>
        <h1>mail: {objData.usrEmail}</h1>
      

        </>
    )
}
export default User;