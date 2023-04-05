import { COUNTER_INCREMENT,COUNTER_DECREMENT } from "./action";

let initialstate={
 
    counter:0

}

const Counter=(State=Object.assign(initialstate,{}),action)=>{
    switch (action.type) {
        
        case COUNTER_INCREMENT:
            return State={...State,counter:State.counter +1}
        
        case COUNTER_DECREMENT:
            return State={...State,counter:State.counter -1}
    
        default:
            return State;
    }
}
export default Counter;