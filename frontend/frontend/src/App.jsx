import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Connecting...");

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Could not connect to backend"));
  }, []);

  return (
    <div>
      <h1>AI DocMate</h1>
      <p>Backend status: {message}</p>
    </div>
  );
}

export default App;