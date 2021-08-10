import './App.css';

function App() {
  const firstName = 'Genesis';
  const lastName = 'Gabiola';
  const gender = 'Male';
  const age = 28;

  const numArray = [4, 9, 16, 25];

  const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      age: 37,
    },
    {
      firstName: 'Mary',
      lastName: 'Smith',
      gender: 'female',
      age: 43,
    },
    {
      firstName: 'Lesley',
      lastName: 'Scott',
      gender: 'female',
      age: 29,
    },
  ];

  return (
    <main>
      <h1>
        Hi! My name is {firstName} {lastName}. I am {age} years old. My gender
        is {gender}.
      </h1>
      <p>
        {numArray.join(', ')} square root is{' '}
        {numArray.map(Math.sqrt).join(', ')}
      </p>
      <p>
        People:{' '}
        {people.map(person => (
          <>
            {person.firstName} {person.lastName} {person.gender} {person.age}
          </>
        ))}
      </p>
    </main>
  );
}

export default App;
