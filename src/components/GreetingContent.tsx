import React from "react";

class GreetingDisplay extends React.Component {
  // Get props and set state
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Good Morning",
      name: "Dario",
    };
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.greeting}, {this.state.name}
        </h1>
        {/* Date */}
      </div>
    );
  }
}

export default GreetingDisplay;
