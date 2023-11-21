import React from "react";

const Sushi = ({ sushi, handleEatSushi }) => {
  const { id, name, img_url, price, eaten } = sushi;

  const handleClick = () => {
    handleEatSushi(id, price);
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
};

export default Sushi;