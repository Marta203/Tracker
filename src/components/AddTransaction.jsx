import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Dodaj nową transakcję</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Tytuł</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Wpisz tytuł..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Kwota <br />
            (ujemna - wydatek, dodatnia - dochód)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Wpisz kwotę..." />
        </div>
        <button className="btn">Dodaj transakcję</button>
      </form>
    </>
  )
}
