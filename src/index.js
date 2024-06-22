import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting() {
  return (
    <>
      <h1>Hello World11!</h1>
      <Person />
      <Message />
    </>
  );
}
export default Greeting;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Greeting />);

const Person = () => <h2>Hello from Anand1!</h2>;
const Message = () => {
  return (
    <p className='message'>Now i am trying nested component concept in react</p>
  );
};
