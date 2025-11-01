import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Body } from "./components/Body";

import { useState } from "react";

const App = () => {
  /* State: is used to control and manage ui components
   *  states contains getter and setter
   * const [name, setName] = useState('')
   * Here name is getter while setName is setter.
   * name: is a simple variable that contains initial values ''
   * setName is a function that update and handle interactivity of component
   */
  const [count, setCount] = useState(0);

  // This is will render if count is greather than 3.
  if (count > 3) return <div>Conditional Rendering</div>;

  // This will render if count is less than 3 or 3 itself
  return (
    <div>
      <Header />
      {/*
       * It is placeholder that renders dynamically
       * This is getter property or variable
       */}
      <p>{count}</p>

      {/*
       * This can listen event handling and increment when we click button
       * using setter function we can do this there setCount is setter function
       */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/**
       * Decrement button
       */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <Body />
      <Footer />
    </div>
  );
};

export default App;
