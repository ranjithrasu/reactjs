
import { useState } from "react";
import Child from "./child"

function App() {
  const [Childmes,setchildmeg]= useState([])
  const [msg,setmsg]=useState([])
  const[tochild,settochild]=useState("")

  const getchilddata=(message)=>{
    setchildmeg([...Childmes,message])
    
  }
  const submit=()=>{
    setmsg([...msg,tochild])
    settochild(" ")
  }
  
  return(
<div>
  {Childmes.map((e,i)=>{
    return(<p key={i}>Child message: {e}</p>)
  })}
  <input type="text" onChange={(e)=>settochild(e.target.value)}></input>
  <button onClick={(e)=>submit(e)}>child</button>
  <Child sendchilddata={getchilddata} getdata={msg}></Child>
</div>

  )

}
export default App;
