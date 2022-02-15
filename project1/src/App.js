import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
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

  return <Expenses items={expenses} />;
};

export default App;
