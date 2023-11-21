import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";
import Table from "./Table";

const SushiContainer = ({ sushiData }) => {
  const [lastSushiIndex, setLastSushiIndex] = useState(3);
  const [balance, setBalance] = useState(100);

  const startIdx = Math.max(0, lastSushiIndex - 3);
  const endIdx = Math.min(lastSushiIndex, sushiData.length - 1);
  const displayedSushi = sushiData.slice(startIdx, endIdx + 1);

  const handleEatSushi = (id, price) => {
    if (balance >= price) {
      setBalance((prevBalance) => prevBalance - price);
    }
  };

  const handleMoreSushi = () => {
    setLastSushiIndex((prevIndex) => prevIndex + 4);
  };

  return (
    <div className="belt">
      {displayedSushi.map((sushi) => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          handleEatSushi={handleEatSushi}
        />
      ))}
      <MoreButton handleMoreSushi={handleMoreSushi} />
      <Table balance={balance} />
    </div>
  );
};

export default SushiContainer;