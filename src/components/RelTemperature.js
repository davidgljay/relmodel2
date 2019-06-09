import React, {Component} from 'react'
import RelModel from '../relmodel'
import RelVisualization from './RelVisualization'
import Slider from '@material-ui/lab/Slider'

class RelTemperature extends Component {

  constructor(props) {
    super(props)

    this.state = {
      temperature: .25,
      relModel: props.relModel ? props.relModel : new RelModel(props.numNodes),
      relIndex: 0,
      stepTimer: null,
      bitTimer: null,
      restartTimer: null,
      bits: []
    }

    this.handleSlider = (e, v) => {
      this.setState({temperature: v})
    }

    this.getPosition = n => {
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
      const {numNodes, temperature} = this.props
      const {relModel, relIndex} = this.state
      if (Math.random() < temperature || relIndex === numNodes/4 || relIndex === 3 * numNodes/4) {
          relModel.step(relIndex)
          for (var i = 0; i < relModel.nodes.length; i++) {
            if (i !== numNodes/4 && i !== 3 * numNodes/4) {
              relModel.nodes[i].targets = Array(numNodes).fill(1/numNodes)
              relModel.nodes[i].targets[numNodes/4]=3/numNodes
              relModel.nodes[i].targets[3 * numNodes/4]=3/numNodes
              relModel.normalize(relModel.nodes[i])
              relModel.nodes[i].color = Math.random() * 360
            }
          }
      }
      this.setState({relIndex: (relIndex + 1) % numNodes})
    }

    this.runBits = () => {
      const {relModel} = this.state
      relModel.bitStep()
      this.setState({bits: relModel.bits})
    }

    this.restart = () => {
        const {runStep, runBits} = this
        clearInterval(this.state.stepTimer)
        clearInterval(this.state.bitTimer)
        const stepTimer = setInterval(runStep, 30)
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
    this.restart(numNodes)
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, restartTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
  }

  render() {
    const {width, height} = this.props
    const {temperature, bits, relModel} = this.state
    return <div>
        <RelVisualization
          width={width}
          height={height}
          relModel={relModel}
          bits={bits}
          getPosition={this.getPosition} />
        <Slider
          className='temperatureSlider'
          value={temperature}
          aria-labelledby="Relational Temperature"
          onChange={this.handleSlider}
          min={0}
          max={1}
        />
    </div>
  }

}

export default RelTemperature
