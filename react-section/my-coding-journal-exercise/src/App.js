import { useState } from 'react';

function App() {
  const day = new Date();
  const [time, setTime] = useState(day.toLocaleString());

  setTimeout(() => {
    setTime(day.toLocaleString());
  }, 1000);
  return (
    <>
      <h1>Current Date and Time: {time}</h1>
    </>
  );
}

export default App;
