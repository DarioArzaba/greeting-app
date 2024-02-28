import "./App.css";
import React from "react";
import GreetingDisplay from "./components/GreetingDisplay";
import GreetingForm from "./components/GreetingForm";

interface AppState {
  name: string;
  hue: number;
}

class App extends React.Component<object, AppState> {
  intervalId: number | undefined;
  constructor(props: object) {
    super(props);
    this.state = { name: "", hue: 0 };
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange = (newName: string) => {
    this.setState({ name: newName });
  };

  componentDidMount() {
    const randomNumber = Math.floor(Math.random() * 33);
    this.intervalId = setInterval(() => {
      this.setState({ hue: (this.state.hue + randomNumber) % 360 });
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { hue } = this.state;
    return (
      <div
        className="container"
        style={{ backgroundColor: `hsl(${hue}, 30%, 15%)` }}
      >
        <GreetingDisplay name={this.state.name} />
        <GreetingForm onNameChange={this.handleNameChange} />
      </div>
    );
  }
}

export default App;
