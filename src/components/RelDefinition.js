import React, {Component} from 'react'
import RelModel from '../relmodel'
import RelVisualization from './RelVisualization'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'

class RelDefinition extends Component {

  constructor(props) {
    super(props)

    this.state = {
      relModel: new RelModel(props.numNodes),
      relIndex: 0,
      stepTimer: null,
      bitTimer: null,
      restartTimer: null,
      bits: []
    }

    this.getPosition = (n) => {
        const {height, width, numNodes} = this.props
        const center = {
          x: width/2,
          y: height/2
        }

        if (n === numNodes/4) {
          return {
            x: width/3,
            y: height/2
          }
        } else if (n === 3 * numNodes/4) {
          return {
            x: 2 * width/3,
            y: height/2
          }
        }

        return {
          x: Math.sin( 2 * Math.PI * n/numNodes ) * width + center.x,
          y: Math.cos( 2 * Math.PI * n/numNodes) * width + center.y
        }
    }

    this.runStep = () => {
      const {numNodes} = this.props
      const {relModel, relIndex} = this.state
      relModel.step(numNodes/4)
      relModel.step(3 * numNodes/4)
    }

    this.runBits = props.runBits ? props.runBits.bind(this) : () => {
      const {relModel} = this.state
      relModel.bitStep()
      this.setState({bits: relModel.bits})
    }

    this.restart = () => {
        const {runStep, runBits} = this
        clearInterval(this.state.stepTimer)
        clearInterval(this.state.bitTimer)
        const stepTimer = setInterval(runStep, 250)
        const bitTimer = setInterval(runBits, 20)
        this.setState({
          relModel: new RelModel(this.props.numNodes),
          stepTimer,
          bitTimer,
          relIndex: 0,
          bits: []})
    }
  }

  componentDidMount() {
    const {numNodes} = this.props
    this.restart(this.props.numNodes)
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, restartTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
    clearInterval(restartTimer)
  }

  render() {
    const {height, width} = this.props
    const {relModel, bits} = this.state
    return <div style={styles.container}>
      <RelVisualization
        width={width}
        height={height}
        relModel={relModel}
        bits={bits}
        getPosition={this.getPosition} />
        <IconButton aria-label="Restart" onClick={this.restart}>
          <ReplayIcon fontSize="medium" />
        </IconButton>
    </div>
  }

}

export default RelDefinition

const styles = {
  container: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}
