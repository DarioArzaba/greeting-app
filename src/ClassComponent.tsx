import React, { Component } from "react";

interface ClassComponentProps {
  myProp: string;
}

export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    return <div>Hey {this.props.myProp}</div>;
  }
}
