// RelVisualization

// Relationality Readout
// How to do this? It should be a score.
// Entropy Reduction/Min, take from the past 5 seconds * 12. Update once/second.
// High Score

// Number of Circles

// External temperature

// Color similarity (ramp up color strength), creates loose clustering
// Ramp up color strength for this model

import React, {Component} from 'react'
import RelModel from '../relmodel'
import RelVisualization from './RelVisualization'
import ProbabilityGraph from './ProbabilityGraph'
import EntropyGraph from './EntropyGraph'
import RelationalityGraph from './RelationalityGraph'

class RelGame extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relModel: new RelModel(10),
      relIndex: 0,
      stepTimer: null,
      bitTimer: null,
      restartTimer: null,
      scoreTimer: null,
      bits: [],
      relScoreLog: [0],
      relScore: 0,
      relScoreMax: 0,
      numNodes: 4,
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

    this.getScore = () => {
      const {relModel, numNodes} = this.state
      let entropySum = relModel.nodes.reduce((sum, node) => sum + node.entropy, 0)
      const relScore = relModel.maxEntropy - entropySum
      this.setState(({relScoreLog}) => ({
          relScore,
          relScoreLog: relScoreLog.concat(relScore).reverse().slice(0,5).reverse(),
          relVelocity: (relScore - relScoreLog[0])/relScoreLog.length
        })
      )

    }

    this.restart = (numNodes) => {
      const {runStep, runBits, getScore} = this
      clearInterval(this.state.stepTimer)
      clearInterval(this.state.bitTimer)
      clearInterval(this.state.scoreTimer)
      const stepTimer = setInterval(runStep, 40)
      const bitTimer = setInterval(runBits, 20)
      const scoreTimer = setInterval(getScore, 1000)
      const relModel = new RelModel(this.state.numNodes)
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.numNodes !== this.state.numNodes) {
      this.restart(this.state.numNodes)
    }
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, restartTimer, scoreTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
    clearInterval(restartTimer)
    clearInterval(scoreTimer)
  }

  render () {
    const {height, width} = this.props
    const {relModel, bits, numNodes, relScore, relVelocity} = this.state
    return <div style={styles.container}>

      <RelVisualization
        width={width}
        height={height}
        relModel={relModel}
        bits={bits}
        getPosition={this.getPosition} />
      <div>Entropy Reduction: {isNaN(relScore) ? 0 : Math.round(relScore * 1000)/numNodes} </div>
      <div>Relationality: {isNaN(relScore) ? 'N/A' : Math.round(relVelocity * 1000)/numNodes}</div>

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
  }
}
