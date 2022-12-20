import React, { Component } from "react";
import Reactotron from 'reactotron-react-js'

class Main extends Component {
  render() {
    Reactotron.display({
      name: 'KNOCK KNOCK',
      preview: 'Who\'s there?',
      value: 'Orange.'
    })
    return <div>test Main</div>;
  }
}

export default Main;
