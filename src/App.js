import React, { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/questions.json")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error("Failed to load questions:", err));
  }, []);

  return (
    <div>
      <h1>Quiz</h1>
      <ul>
        {questions.map((q, idx) => (
          <li key={idx}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
