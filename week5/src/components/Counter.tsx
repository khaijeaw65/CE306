import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Counter Exercise Solution</h2>
      <div style={{ color: "lightblue" }}>{count}</div>
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setCount((previousCount) => previousCount + 1)}>+ เพิ่ม</button>
        <button
          onClick={() => setCount((previousCount) => previousCount - 1)}
          style={{ marginLeft: "10px" }}
        >
          - ลด
        </button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
