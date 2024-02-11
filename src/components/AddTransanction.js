import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransanction = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const [isDisabled, setIsDisabled] = useState(true)
    const { addTransaction } = useContext(GlobalContext)

    useEffect(() => {
        if(text.trim() !== "") {
            setIsDisabled(!(text && amount));
        }
      }, [text, amount]);

    const handleChange = (e) => { 
        if(e.target.type === 'text') { 
            setText(e.target.value)
        }

        if(e.target.type === 'number') { 
            const parsedValue = parseInt(e.target.value);
            if (!isNaN(parsedValue)) {
                setAmount(parsedValue);
              } else {
                setAmount(0);
              }
        }
    }

    const onSubmit = (e) => { 
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        
        if(text.toLowerCase().trim() !== "" && newTransaction.amount !== 0) { 
            setIsDisabled(true)
            setAmount(0)
            setText("")
            addTransaction(newTransaction)
        } else { 
            setIsDisabled(false)
        }

    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => handleChange(e)} placeholder="Enter Text.." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount <br />
                    <span className='desc'>(negative - expense, positive - income)</span>
                </label>
                <input type="number" value={amount} onChange={(e) => handleChange(e)} placeholder="Enter amount..." />
            </div>
            <button disabled={isDisabled} className="btn">Add transaction</button>
        </form>
    </>
  )
}
