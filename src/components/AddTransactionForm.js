import React, { useState } from "react";

function AddTransactionForm({ addTrans }) {
  const [transactionFormData, setTransactionFormData] = useState({
    date: "", 
    description: "", 
    category: "", 
    amount: "",
  })

  function handleChange(e){
    const key = e.target.id
    setTransactionFormData({
      ...transactionFormData,
      [key]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionFormData),
  })
    .then((res) => res.json())
    .then((data) => addTrans(data));
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={transactionFormData.date} id="date" placeholder="Date" onChange={handleChange}/>
          <input type="text" name="description" value={transactionFormData.description} id="description" placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" value={transactionFormData.category} id="category" placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" value={transactionFormData.amount} id="amount" placeholder="Amount" step="0.01" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
