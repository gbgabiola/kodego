import React, { useState, useEffect } from 'react';
import InventoryForm from './InventoryForm';
import InventoryList from './InventoryList';

let loadData = localStorage.getItem('Inventory')
  ? JSON.parse(localStorage.getItem('Inventory'))
  : [];
// loadData = localStorage.getItem('cart');
// if (loadData == null) {
//   loadData = {};
// } else {
//   loadData = JSON.parse(loadData);
// }

const InventoryTracker = () => {
  const [productName, setProductName] = useState('');
  const [productAmount, setProductAmount] = useState(null);
  const [productTotalAmount, setProductTotalAmount] = useState(loadData);

  const handleProductName = e => {
    setProductName(e.target.value);
  };

  const handleProductAmount = e => {
    setProductAmount(e.target.value);
  };

  const handleProductSubmit = e => {
    e.preventDefault();
    if (productName !== '' && productAmount > 0) {
      const product = { productName, productAmount };
      setProductTotalAmount([...productTotalAmount, product]);
      setProductName('');
      setProductAmount('');
    } else {
      alert('invalid product name or product amount');
    }
  };

  const handleProductDelete = e => {
    setProductTotalAmount([]);
  };

  useEffect(() => {
    localStorage.setItem('Inventory', JSON.stringify(productTotalAmount));
  }, [productTotalAmount]);

  return (
    <>
      <h1>Product Information: </h1>
      <InventoryForm
        productName={productName}
        productAmount={productAmount}
        handleProductName={handleProductName}
        handleProductAmount={handleProductAmount}
        handleProductSubmit={handleProductSubmit}
        handleProductDelete={handleProductDelete}
      />
      <InventoryList productTotalAmount={productTotalAmount} />
      <h4>
        Total:{' '}
        {productTotalAmount.reduce((accumulator, currentValue) => {
          // console.log(currentValue.productAmount);
          return (accumulator += parseFloat(currentValue.productAmount));
        }, 0)}
      </h4>
    </>
  );
};

export default InventoryTracker;
