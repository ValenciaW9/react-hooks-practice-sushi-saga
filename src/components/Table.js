import React, { useState } from "react";

const Table = ({ balance, handleAddMoney }) => {
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      handleAddMoney(parsedAmount);
      setAmount("");
    }
  };

  return (
    <div className="table">
      <p>Balance: ${balance}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          min="0"
          placeholder="Enter amount"
          value={amount}
          onChange={handleChange}
        />
        <button type="submit">Add Money</button>
      </form>
    </div>
  );
};

export default Table;