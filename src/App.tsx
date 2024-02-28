import "./App.css";
import React from "react";
import GreetingDisplay from "./components/GreetingDisplay";
import GreetingForm from "./components/GreetingForm";

const App = (): React.JSX.Element => {
  return (
    <>
      <div className="container">
        <GreetingDisplay />
        <GreetingForm />
      </div>
    </>
  );
};
export default App;
