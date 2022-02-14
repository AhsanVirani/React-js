import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      date: new Date(2018, 2, 1),
      title: "Car Insurance",
      amount: 157.2,
    },

    {
      date: new Date(2018, 4, 23),
      title: "House Mortgage",
      amount: 3000,
    },

    {
      date: new Date(2020, 8, 11),
      title: "Food",
      amount: 12,
    },
  ];

  return (
    <div>
      <h1>Expense Tracker App</h1>
      <ExpenseItem
        date={expenses[0].date.toDateString()}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date.toDateString()}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date.toDateString()}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
    </div>
  );
}

export default App;
