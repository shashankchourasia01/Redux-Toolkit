import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentAmount } from './redux/features/counterSlice';

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

      <button onClick={()=>{
        dispatch(increamentAmount(10))
      }}>increase amount</button>
    </div>
  )
}

export default App