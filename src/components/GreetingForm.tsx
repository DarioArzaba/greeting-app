import React from "react";
import PropTypes from "prop-types";

class GreetingForm extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = { name: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value.slice(0, 35) });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onNameChange(this.state.name);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Enter Your Name"
          className="name-input"
          maxLength={35}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    );
  }
}

GreetingForm.propTypes = {
  onNameChange: PropTypes.func.isRequired,
};

GreetingForm.defaultProps = {
  onNameChange: () => {},
};

export default GreetingForm;
