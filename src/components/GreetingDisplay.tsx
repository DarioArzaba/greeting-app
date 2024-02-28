import React from "react";

class GreetingDisplay extends React.Component {
  // Get props and set state
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      name: "Dario",
      currentTime: new Date(),
    };
  }

  setGreeting() {
    const currentHour = this.state.currentTime.getHours();
    if (currentHour <= 23) {
      this.setState({ greeting: "Good Evening" });
    } else if (currentHour <= 18) {
      this.setState({ greeting: "Good Afternoon" });
    } else if (currentHour >= 5 && currentHour <= 12) {
      this.setState({ greeting: "Good Morning" });
    } else {
      this.setState({ greeting: "Good Night" });
    }
  }

  componentDidMount(): void {
    this.setGreeting();
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.greeting}, {this.state.name}
        </h1>
        {this.state.currentTime.toLocaleTimeString()}
      </div>
    );
  }
}

export default GreetingDisplay;
