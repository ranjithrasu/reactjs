import {useState } from "react";


function Child(props){
    const [toparent,settoparent]=useState("")
    

const Sendtoparent = ()=>{
    props.sendchilddata(toparent)
    settoparent('')
    
}
return(
    <div>
        {props.getdata.map((e,i)=>{
    return(<p key={i}>parent message : {e}</p>)
  })}
        <input type="text" onChange={(e)=>{settoparent(e.target.value)}}></input>
        <button onClick={Sendtoparent}>parent</button>
    </div>
)
}
export default Child;