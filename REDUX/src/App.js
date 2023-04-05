

import { useDispatch,useSelector } from "react-redux";
import { COUNTER_INCREMENT,COUNTER_DECREMENT } from "./redux/action";
function App() {
  const  Dispatch=useDispatch();
  const Count=useSelector(state=>state.Newcounter)
 const increment=()=>{
  Dispatch({type:COUNTER_INCREMENT})
 }
 const decrement=()=>{
  Dispatch({type:COUNTER_DECREMENT})
 }
 
  return (
    <div className="App">

    <h1>COUNT VALUE : {Count.counter}</h1>
  <button onClick={increment} >add+1</button>
  <button onClick={decrement} >sub-1</button>
    </div>
  )
}

export default App;
