import React, {Component} from 'react'
import RelCircle from './RelCircle'
import Slider from '@material-ui/lab/Slider';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numNodes: 10
    }

    this.handleSlider = (e, v) => {
      console.log(e,v);
      this.setState({numNodes: v})
    }
  }

  render () {
    const {numNodes} = this.state
    return <div className="App" style={styles.container}>
      <h1>Colored Edgeless Network</h1>
      <p>Nodes ignore colors that are far from them on the spectrum and shift towards colors that they receive.</p>
      <RelCircle height='350' width='350' numNodes={numNodes} radius={150}/>
      <div style={styles.sliderContainer}>
        <Slider
          className='slider'
          value={numNodes}
          aria-labelledby="Number of Nodes"
          onChange={this.handleSlider}
          min={2}
          max={50}
          step={1}
        />
      </div>
    </div>
  }
}

export default App

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  },
  sliderContainer: {
    width: 300,
    margin: 30
  }
}
