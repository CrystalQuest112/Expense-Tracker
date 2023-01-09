import "./App.css";
import Exitems from "./components/exitems";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Groceries",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Fitness Equipment",
      amount: 389.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 194.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Furniture",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h1>Expense Tracker</h1>
      <Exitems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <Exitems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <Exitems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
