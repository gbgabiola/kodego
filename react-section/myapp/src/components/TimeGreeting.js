import React, { useState } from 'react';

const TimeGreeting = () => {
  const styles = {
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
    styles.color = 'yellow';
  } else if (hourOfDay < 17) {
    greeting = 'Good Afternoon!';
    styles.color = 'orange';
  } else {
    greeting = 'Good Evening!';
    styles.color = 'red';
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
