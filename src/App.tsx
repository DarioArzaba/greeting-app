import "./App.css";
import React from "react";
import GreetingDisplay from "./components/GreetingDisplay";
import GreetingForm from "./components/GreetingForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (newName) => {
    this.setState({ name: newName });
  };

  render() {
    return (
      <div className="container">
        <GreetingDisplay name={this.state.name} />
        <GreetingForm onNameChange={this.handleNameChange} />
      </div>
    );
  }
}

export default App;
