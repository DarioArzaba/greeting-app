import React from "react";

class GreetingDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      currentTime: new Date(),
    };
    this.setGreeting = this.setGreeting.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
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

  setCurrentTime() {
    this.setState({ currentTime: new Date() });
  }

  componentDidMount() {
    this.setGreeting();
    this.clockInterval = setInterval(this.setCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <div className="greeting-display">
        <h1>
          {this.state.greeting}
          {this.props.name && ", " + this.props.name}
        </h1>
        <p className="clock">{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default GreetingDisplay;
