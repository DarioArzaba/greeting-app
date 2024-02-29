import React from "react";
import PropTypes from "prop-types";

interface GreetingDisplayState {
  currentTime: Date;
}

class GreetingDisplay extends React.Component<
  { name: string },
  GreetingDisplayState
> {
  clockInterval: number | undefined;
  constructor(props: { name: string }) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
    this.getGreeting = this.getGreeting.bind(this);
    this.setCurrentTime = this.setCurrentTime.bind(this);
  }

  getGreeting() {
    const currentHour = this.state.currentTime.getHours();
    if (currentHour < 12) return "Good Morning";
    if (currentHour < 18) return "Good Afternoon";
    return "Good Evening";
  }

  setCurrentTime() {
    this.setState({ currentTime: new Date() });
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.setCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }

  render() {
    return (
      <div className="greeting-display">
        <h1>
          {this.getGreeting()}
          {this.props.name && ", " + this.props.name}
        </h1>
        <p className="clock">{this.state.currentTime.toLocaleTimeString()}</p>
      </div>
    );
  }
}

GreetingDisplay.propTypes = {
  name: PropTypes.string,
};

GreetingDisplay.defaultProps = {
  name: "",
};

export default GreetingDisplay;
