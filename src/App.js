import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);
  const date = new Date("August 27 2024");
  date.setDate(date.getDate() + count);
  function handleplus() {
    if (count >= 0) {
      setCount((c) => c + step);
    }
  }
  function handleminus() {
    if (count > 0) {
      setCount((c) => c - step);
    }
  }
  return (
    <div className="App">
      <div>
        <input
          value={step}
          type="range"
          min={1}
          max={10}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>step:{step}</span>
      </div>
      <div>
        <button onClick={handleplus}>+</button>
        <span>
          <input
            type={"number"}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </span>
        <button onClick={handleminus}>-</button>
      </div>
      <div>
        <span>
          {count == 0
            ? "Today is"
            : count > 0
            ? `${count} day was`
            : `${Math.abs(count)} day was`}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </div>
  );
}
