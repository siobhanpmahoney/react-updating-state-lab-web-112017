// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0
    };
  }

  handleClickCount = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    }, () => console.log(`this has been clicked ${this.state.timesClicked} times.`))
  }

  render() {
    return (
      <button onClick={this.handleClickCount}>{this.state.timesClicked}</button>
    )
  }
}
