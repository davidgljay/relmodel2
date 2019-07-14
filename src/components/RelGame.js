import React, {Component} from 'react'
import RelModel from '../relmodel'
import RelVisualization from './RelVisualization'
import ProbabilityGraph from './ProbabilityGraph'
import EntropyGraph from './EntropyGraph'
import RelationalityGraph from './RelationalityGraph'
import Slider from '@material-ui/lab/Slider'

class RelGame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relModel: new RelModel(10),
      relIndex: 0,
      stepTimer: null,
      bitTimer: null,
      restartTimer: null,
      relTimer: null,
      bits: [],
      relScoreLog: [0],
      relScore: 0,
      relScoreMax: 0,
      numNodes: 6,
      colorShiftStrength: 1,
      max: 0
    }

    this.getPosition = (n) => {
      const {height, width, radius} = this.props
      const {numNodes} = this.state
      const center = {
        x: width/2,
        y: height/2
      }
      return {
        x: Math.sin( 2 * Math.PI * n/numNodes ) * radius + center.x,
        y: Math.cos( 2 * Math.PI * n/numNodes) * radius + center.y
      }
    }

    this.handleColorSlider = (e, v) => {
      this.setState({colorShiftStrength: v})
      this.restart()
    }

    this.handleNumSlider = (e, v) => {
      this.setState({numNodes: v})
      this.restart()
    }

    this.runStep = () => {
      const {numNodes} = this.state
      const {relModel, relIndex} = this.state
      relModel.step(relIndex)
      this.setState({relIndex: (relIndex + 1) % numNodes})
    }

    this.runBits = () => {
      const {relModel} = this.state
      relModel.bitStep()
      this.setState({bits: relModel.bits})
    }

    this.restart = () => {
      const {runStep, runBits, getScore} = this
      const {numNodes, colorShiftStrength} = this.state
      clearInterval(this.state.stepTimer)
      clearInterval(this.state.bitTimer)
      clearInterval(this.state.relTimer)
      const stepTimer = setInterval(runStep, 40)
      const bitTimer = setInterval(runBits, 20)
      const relModel = new RelModel(numNodes, 1, 1, 1, colorShiftStrength)
      const relTimer = setInterval(relModel.updateRelationality, 400)
      this.setState({
        relModel,
        stepTimer,
        bitTimer,
        relIndex: 0,
        bits: []})
    }
  }

  componentDidMount() {
    this.restart(this.state.numNodes)
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, restartTimer, relTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
    clearInterval(restartTimer)
    clearInterval(relTimer)
  }

  render () {
    const {height, width} = this.props
    const {relModel, bits, numNodes, relScore, relVelocity, colorShiftStrength} = this.state
    return <div style={styles.container}>

      <RelVisualization
        width={width}
        height={height}
        relModel={relModel}
        bits={bits}
        getPosition={this.getPosition} />
      <div style={styles.sliderContainer}>
        <h4>How many nodes?</h4>
        <Slider
          className='slider'
          value={numNodes}
          aria-labelledby="Number of Nodes"
          onChange={this.handleNumSlider}
          min={2}
          max={30}
          step={1} />
      </div>
      <div style={styles.sliderContainer}>
        <h4>How quickly do colors shift?</h4>
        <Slider
          className='slider'
          value={colorShiftStrength}
          aria-labelledby="How quickly do colors shift?"
          onChange={this.handleColorSlider}
          min={0}
          max={3}
          step={.05} />
      </div>
      <h4>Entropy Curve</h4>
      <EntropyGraph
        width={width}
        height={40}
        relModel={relModel} />
      </div>
  }
}

export default RelGame;

const styles = {
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  sliderContainer: {
    marginTop: 30,
    marginBottom: 30,
    width: '100%'
  }
}
