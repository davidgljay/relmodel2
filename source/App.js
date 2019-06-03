import React, {Component} from 'react';
import PropTypes from 'prop-types';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    console.log('Rendering');
    return <h1>Relationality</h1>
  }
}

export default App;
