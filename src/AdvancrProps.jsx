const AdvanceProps=({potato='Default usr',children,h1color,color})=>
{
   return(
   <div style={{color:h1color,margin:'40px',border:'solid {color}',width:'300px'}}>
      <h1 style={{color:color}} >hi from the {potato}</h1>
      {children}
   </div>
   ) 
}
export default AdvanceProps;