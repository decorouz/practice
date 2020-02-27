import React from 'react';
import ReactDOM from 'react-dom';

const Hello = ({ name, age }) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old.{' '}
      </p>
      <p>So you were probably born in {bornYear()} </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/decorouz/fullStack2019"> adeyemi</a>
    </div>
  );
};

const App = () => {
  const name = 'James';
  const age = 34;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Abiola" age={47 + 34} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
