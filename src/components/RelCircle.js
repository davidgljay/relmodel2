import React, {Component} from 'react'
import {blue} from '../styles/colors'
import RelModel from '../relmodel'

class RelCircle extends Component {

  constructor(props) {
    super(props);

    this.state = {
      relModel: new RelModel(props.numNodes),
      relIndex: 0,
      stepTimer: null,
      bits: []
    }

    this.getPosition = (n) => {
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

    this.runStep = () => {
      const {numNodes} = this.props
      const {relModel, relIndex} = this.state
      relModel.step(relIndex)
      this.setState({relIndex: (relIndex + 1) % numNodes})
    }

    this.runBits = () => {
      const {relModel} = this.state
      relModel.bitStep()
      this.setState({bits: relModel.bits})
    }
  }

  componentDidMount() {
    const {runStep, runBits} = this
    const stepTimer = setInterval(runStep, 40)
    const bitTimer = setInterval(runBits, 20)
    this.setState({stepTimer, bitTimer})
  }

  componentWillUnmount() {
    clearInterval(this.state.stepTimer)
    clearInterval(this.state.bitTimer)
  }

  render () {
    const {height, width} = this.props
    const {relModel, bits} = this.state
    return <div>
      <svg id="visualization"
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        {
          relModel.nodes.map((_, i) => {
            const {x,y} = this.getPosition(i)
            return <circle key={i} style={{fill:blue}} cx={x} cy={y} r="10"/>
          })
        }
        {
          bits.map((bit, i) => {
            const source = this.getPosition(bit.source)
            const target = this.getPosition(bit.target)
            const bitPlacement = {
              x: source.x + (target.x - source.x) * bit.complete/100,
              y: source.y + (target.y - source.y) * bit.complete/100
            }
            return <circle key={'bit' + i} style={{fill:blue}} cx={bitPlacement.x} cy={bitPlacement.y} r="2"/>
          })
        }

      </svg>
    </div>
  }
}

export default RelCircle;
