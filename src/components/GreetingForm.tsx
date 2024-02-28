import React from "react";

class GreetingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value.slice(0, 35) });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      this.props.onNameChange(this.state.name);
    }
  };

  render() {
    return (
      <form className="form">
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Your Name"
          className="name-input"
          maxLength={35}
        />
      </form>
    );
  }
}

export default GreetingForm;
