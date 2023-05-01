import "./App.css";
import PerformAddition from "./PerformAddition";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1>count is {count}</h1> */}
      <div style={{ display: "flex", gap: "20px" }}>
        {/* <button onClick={() => setCount((count) => count - 1)}>
            DECREMENT
          </button>
          <button onClick={() => setCount(0)}>RESET</button>
          <button onClick={() => setCount((count) => count + 1)}>
            INCREMENT
          </button> */}

        <PerformAddition />
      </div>
    </div>
  );
}

export default App;
