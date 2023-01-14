import "./App.css";
import ExpDisplay from "./components/ExpDisplay";
import NewExp from "./components/NewExpense/newExp";

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

  function addExpense(expense) {
    console.log("inApp.js");
    console.log(expense);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <NewExp prpAddExpense={addExpense} />
        <ExpDisplay expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
