const InventoryForm = ({
  productName,
  productAmount,
  handleProductName,
  handleProductAmount,
  handleProductSubmit,
  handleProductDelete,
}) => {
  return (
    <>
      <form action="" onSubmit={handleProductSubmit}>
        <label>Product Name</label>
        <input type="text" value={productName} onChange={handleProductName} />

        <label>Amount</label>
        <input
          type="number"
          value={productAmount}
          placeholder="0.00"
          onChange={handleProductAmount}
        />

        <button>Submit</button>
        <button type="button" onClick={handleProductDelete}>
          Delete
        </button>
      </form>
    </>
  );
};

export default InventoryForm;
