import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        <span className='transaction__text'>{transaction.text}</span>
        <span className='transaction__amount'>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  )
}
