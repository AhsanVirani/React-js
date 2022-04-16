import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShow(false);
  };

  // show state and handler
  const [show, setShow] = useState(false);

  const showFormHandler = () => {
    setShow(true);
  };

  const cancelFormHandler = () => {
    setShow(false);
  };

  return (
    <div className="new-expense">
      {!show && (
        <button type="submit" onClick={showFormHandler}>
          {" "}
          Add New Expense{" "}
        </button>
      )}
      {show && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
