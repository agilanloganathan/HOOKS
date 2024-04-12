
                          //Normal useState Method//

// import React, { useState } from 'react'



// const App = () =>{
//     const [count ,setCount] =useState(0)



// const increaseCount = () =>{
//     setCount ((prev) => prev + 1)
// }


// const decreaseCount = () =>{
//     setCount ((prev) => prev - 1)
// }

//   return (
//     <div className='table'>
//         <h1>  Count : {count}</h1>
//         <button onClick={increaseCount}>Increase</button>
//         <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

// export default App 


                    //   Using Use Reducer Method  //

import {useReducer} from 'react'

const App = () => {

  const [state,dispatch] =  useReducer (reducer,initialState)

  const increaseCount = ()=>{
    dispatch( {type : ACTION.INCREASE})
  }

  const decreaseCount = ()=>{
    dispatch( {type : ACTION.DECREASE})
  }

  return (
    <div>
        <h1> Count : {state.count}</h1>
        <button onClick={increaseCount}>Increment</button>
        <button onClick={decreaseCount}>Decrement</button>
    </div>
  )
}

export default App

const ACTION = {
    INCREASE : 'increase',
    DECREASE : 'decrease'
}

const initialState = {count:0}

const reducer = (state, action) =>{

switch (action.type){

     case ACTION.INCREASE:
        return {count : state.count + 1}
     case ACTION.DECREASE:
        return {count : state.count - 1} 

    default:
    return state
}

}