import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentAmount } from './redux/features/counterSlice';
// import Form from './components/twoWayBinding';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increament())
      }}>incre</button>
      <button onClick={() => {
          dispatch(decreament( ))
      }}>decre</button>
      <br />
      <button onClick={()=>{
        dispatch(increamentAmount(10))
      }}>increase amount</button>



    
      {/* Two way binding */}
      {/* <Form /> */}
    </div>
  )
}

export default App