import React, {Component} from 'react';
import RelCircle from './RelCircle'
import Slider from '@material-ui/lab/Slider';

class RelIntro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numNodes: 10
    }

    this.handleSlider = (e, v) => {
      this.setState({numNodes: v})
    }
  }

  render () {
    const {numNodes} = this.state

    return <div>
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

export default RelIntro;

const styles = {
  sliderContainer: {
    width: 300,
    margin: 30
  }
}
