import "./App.css";
import React from "react";
import GreetingContent from "./components/GreetingContent";

const App = (): React.JSX.Element => {
  return (
    <>
      <div className="container">
        {/* Name Form  */}
        <GreetingContent />
      </div>
    </>
  );
};
export default App;
