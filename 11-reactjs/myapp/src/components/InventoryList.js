import React from 'react';

const InventoryList = ({ productTotalAmount }) => {
  return (
    <div>
      {productTotalAmount.map(item => (
        <p>
          {console.log(item.productName, item.productAmount)}
          {item.productName}: &#8369; {item.productAmount}
        </p>
      ))}
    </div>
  );
};

export default InventoryList;
