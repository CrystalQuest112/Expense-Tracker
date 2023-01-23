import "./App.css";
import ExpDisplay from "./components/ExpDisplay";
import NewExp from "./components/NewExpense/newExp";

function App() {
  const [expenses, setExpenses] = useState(DM_EXPENSES);

  function addExpense(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
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
