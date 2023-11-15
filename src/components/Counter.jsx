import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../redux/counterSlice';

function Counter() {

  const [range ,setRange] = useState('')

  // hoook to dispatch a function in action
  const dispatch = useDispatch()
  // component can access the state of using useSelector hook
  const count = useSelector((state) => state.counter.value)

  // console.log(range);

  return (
    <>
      <div className='container-fluid vh-100 d-flex justify-content-center align-items-center'>
        <div className='card p-3 col-md-6 shadow-lg bg-light'>
          <h1 className="text-primary mb-4" style={{ fontSize: "4", textAlign: 'center' }}>Counter Application</h1>
          <h1 style={{ fontSize: "6vw", textAlign: 'center' }} className="fw-bolder mb-3 mt-2">{count}</h1>
          <div className='d-flex justify-content-between mt-4'>
            <button className='btn btn-primary' onClick={() => dispatch(decrement(Number(range)))}>Decrement</button>
            <button className='btn btn-danger ms-2' onClick={() => dispatch(reset())}>Reset</button>
            <button className='btn btn-warning' onClick={() => dispatch(increment(Number(range)))}>Increment</button>
          </div>
          <div className='mt-3 w-100'>
            <input type="text" onChange={(e)=>setRange(e.target.value)} className='form-control' style={{ borderColor: "black" }} placeholder='enter the name' />
          </div>
        </div>
      </div>

    </>
  )
}
export default Counter;
