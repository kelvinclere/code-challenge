import React, {useState} from "react";

function AddTransactionForm(props) {

  const transactions = props.transactions;
  const setTransactions = props.setTransactions;

  const [state, setState] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8001/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(state)
    })
      .then(res => res.json())
      .then(data => {
        setTransactions([
          ...transactions,
          data
        ]);
      })
  }
  function handleChange(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
