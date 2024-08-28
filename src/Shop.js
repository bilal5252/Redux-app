import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreaters } from './state';
import { bindActionCreators } from 'redux';

function Shop() {
    const dispatch = useDispatch();
    const balance = useSelector(state=>state.amount)
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreaters, dispatch);
  return (
    <div>
        <h2>Deposite/withdraw Money</h2>
        <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update balance : {balance}
        <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop