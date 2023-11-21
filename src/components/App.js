import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiData, setSushiData] = useState([]);
  const [balance, setBalance] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setSushiData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleEatSushi = (id, price) => {
    if (balance >= price) {
      setSushiData((prevSushiData) =>
        prevSushiData.map((sushi) =>
          sushi.id === id ? { ...sushi, eaten: true } : sushi
        )
      );
      setBalance((prevBalance) => prevBalance - price);
    }
  };

  const handleAddMoney = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  return (
    <div className="app">
      <SushiContainer
        sushiData={sushiData}
        handleEatSushi={handleEatSushi}
      />
      <Table balance={balance} handleAddMoney={handleAddMoney} />
    </div>
  );
}

export default App;