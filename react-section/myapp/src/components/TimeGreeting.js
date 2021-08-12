import React, { useState } from 'react';

const TimeGreeting = () => {
  const styles = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 32,
  };

  const day = new Date();
  const hourOfDay = day.getHours();
  // const hourOfDay = 11;
  const [time, setTime] = useState(day.toLocaleString());
  let greeting;

  setTimeout(() => {
    setTime(day.toLocaleString());
  }, 1000);

  if (hourOfDay < 12) {
    greeting = 'Good Morning!';
    styles.backgroundColor = 'red';
    styles.color = 'white';
  } else if (hourOfDay < 17) {
    greeting = 'Good Afternoon!';
    styles.backgroundColor = 'green';
    styles.color = 'white';
  } else {
    greeting = 'Good Evening!';
    styles.backgroundColor = 'blue';
    styles.color = 'white';
  }

  return (
    <div>
      <p>
        {time} <span style={styles}>{greeting}</span>
      </p>
    </div>
  );
};

export default TimeGreeting;
