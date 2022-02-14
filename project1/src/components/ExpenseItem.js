import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense__item">
      <div>{props.date}</div>
      <div className="expense__description">
        <h2>{props.title}</h2>
        <div className="expense__amount">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
