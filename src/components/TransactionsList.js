import React from "react";
import Transaction from "./Transaction";

function TransactionsList({ transactionsListed, search}) {

  const filtered = transactionsListed.filter((trans) => {
    let result = trans.description.toLowerCase().includes(search)
    return result;
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filtered.map((trans) => (
          <Transaction key={trans.id} trans={trans} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsList
