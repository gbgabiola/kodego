import React, { useState } from 'react';

const TimeGreeting = () => {
  const styles = {
    backgroundColor: 'black',
    color: 'white',
  };

  // const styles = {
  //   morning: {
  //     backgroundColor: 'red',
  //     color: 'white',
  //   },
  //   afternoon: {
  //     backgroundColor: 'green',
  //     color: 'black',
  //   },
  //   evening: {
  //     backgroundColor: 'blue',
  //     color: 'white',
  //   },
  // };

  const day = new Date();
  const hourOfDay = day.getHours();
  const [time, setTime] = useState(day.toLocaleString());
  let greeting;

  setTimeout(function () {
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
      <header>This is a Header.</header>
      <h3 style={{ color: 'blue' }}>Home</h3>
      <h3 style={{ backgroundColor: 'red', color: '#fff' }}>About Us</h3>
      <h3>Contact Us</h3>
      <p>
        Current time is {time}. <span style={styles}>{greeting}</span>
      </p>
    </div>
  );
};

export default TimeGreeting;
