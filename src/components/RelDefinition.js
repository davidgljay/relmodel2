import React, {Component} from 'react'
import RelModel from '../relmodel'
import RelCircle from './RelCircle'

class RelDefinition extends Component {

  getPosition(n) {
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

  runStep() {
    const {numNodes} = this.props
    const {relModel, relIndex} = this.state
    relModel.step(numNodes/4)
    relModel.step(3 * numNodes/4)
  }

  restart() {
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

  render() {

    return <RelCircle {...this.props}
      relModel={new RelModel(this.props.numNodes, .1, 1, .01)}
      getPosition={this.getPosition}
      runStep={this.runStep}
      restart={this.restart}
      restartInterval={30000}
    />
  }

}

export default RelDefinition
