const SchoolBoard = props => {
  return (
    <div>
      <h3 style={{ display: !props.category && 'none' }}>
        Category: {props.category}
      </h3>
      <h3 style={{ color: !props.category && 'blue' }}>Post: {props.post}</h3>
      <hr />
    </div>
  );
};

export default SchoolBoard;
