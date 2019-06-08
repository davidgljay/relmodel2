import React, {Component} from 'react'
import RelModel from '../relmodel'

class RelCircle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relModel: props.relModel ? props.relModel : new RelModel(props.numNodes),
      relIndex: 0,
      stepTimer: null,
      bitTimer: null,
      restartTimer: null,
      bits: []
    }

    this.getPosition = props.getPosition ? props.getPosition.bind(this) : (n) => {
      const {height, width, radius, numNodes} = this.props
      const center = {
        x: width/2,
        y: height/2
      }
      return {
        x: Math.sin( 2 * Math.PI * n/numNodes ) * radius + center.x,
        y: Math.cos( 2 * Math.PI * n/numNodes) * radius + center.y
      }
    }

    this.runStep = props.runStep ? props.runStep.bind(this) : () => {
      const {numNodes} = this.props
      const {relModel, relIndex} = this.state
      relModel.step(relIndex)
      this.setState({relIndex: (relIndex + 1) % numNodes})
    }

    this.runBits = props.runBits ? props.runBits.bind(this) : () => {
      const {relModel} = this.state
      relModel.bitStep()
      this.setState({bits: relModel.bits})
    }

    this.restart = props.restart ? props.restart.bind(this) : (numNodes) => {
      const {runStep, runBits} = this
      clearInterval(this.state.stepTimer)
      clearInterval(this.state.bitTimer)
      const stepTimer = setInterval(runStep, 40)
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
    const {numNodes, restartInterval} = this.props
    this.restart(this.props.numNodes)
    if (restartInterval) {
      const restartTimer = setInterval(() => this.restart(numNodes), restartInterval)
      this.setState({restartTimer})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.numNodes !== this.props.numNodes) {
      this.restart(this.props.numNodes)
    }
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, restartTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
    clearInterval(restartTimer)
  }

  render () {
    const {height, width, render} = this.props
    const {relModel, bits} = this.state
    return <div style={styles.container}>
      <svg id="visualization"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {
          bits.map((bit, i) => {
            const source = this.getPosition(bit.source)
            const target = this.getPosition(bit.target)
            const bitPlacement = {
              x: source.x + (target.x - source.x) * bit.complete/100,
              y: source.y + (target.y - source.y) * bit.complete/100
            }
            return <circle key={'bit' + i} style={{fill:`hsl(${bit.color}, 100%, 50%)`}} cx={bitPlacement.x} cy={bitPlacement.y} r="2"/>
          })
        }
        {
          relModel.nodes.map(({color, max}, i) => {
            const {x,y} = this.getPosition(i)
            return <circle key={i} style={{fill:`hsl(${color}, 100%, 50%)`, zIndex: 10}} cx={x} cy={y} r="10"/>
          })
        }
        {
          render && render
        }

      </svg>
    </div>
  }
}

export default RelCircle;

const styles = {
  container: {
    padding: 20
  }
}
