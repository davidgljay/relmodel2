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
      mount={this.mount}
      unmount={this.unmount}
      restartInterval={30000}
    />
  }

}

export default RelDefinition

//
// class RelDefinition extends Component {
//
//
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       relModel: new RelModel(props.numNodes, .1, 1, .001),
//       relIndex: 0,
//       stepTimer: null,
//       bitTimer: null,
//       restartTimer: null,
//       bits: []
//     }
//
//     this.getPosition = (n) => {
//       const {height, width, numNodes} = this.props
//       const center = {
//         x: width/2,
//         y: height/2
//       }
//       if (n === numNodes/4) {
//         return {
//           x: width/3,
//           y: height/2
//         }
//       } else if (n === 3 * numNodes/4) {
//         return {
//           x: 2 * width/3,
//           y: height/2
//         }
//       }
//       return {
//         x: Math.sin( 2 * Math.PI * n/numNodes ) * width + center.x,
//         y: Math.cos( 2 * Math.PI * n/numNodes) * width + center.y
//       }
//     }
//
//     this.runStep = () => {
//       const {numNodes} = this.props
//       const {relModel, relIndex} = this.state
//       relModel.step(numNodes/4)
//       relModel.step(3 * numNodes/4)
//     }
//
//     this.runBits = () => {
//       const {relModel} = this.state
//       relModel.bitStep()
//       this.setState({bits: relModel.bits})
//     }
//
//     this.restart = (numNodes) => {
//       const {runStep, runBits} = this
//       clearInterval(this.state.stepTimer)
//       clearInterval(this.state.bitTimer)
//       const stepTimer = setInterval(runStep, 200)
//       const bitTimer = setInterval(runBits, 20)
//       this.setState({
//         relModel: new RelModel(this.props.numNodes),
//         stepTimer,
//         bitTimer,
//         relIndex: 0,
//         bits: []})
//     }
//   }
//
//   componentDidMount() {
//     this.restart(this.props.numNodes)
//     this.setState({
//       restartTimer: setInterval(() => this.restart(this.props.numNodes), 30000)
//     })
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.numNodes !== this.props.numNodes) {
//       this.restart(this.props.numNodes)
//     }
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.state.stepTimer)
//     clearInterval(this.state.bitTimer)
//     clearInterval(this.restartTimer)
//   }
//
//   render () {
//     const {height, width} = this.props
//     const {relModel, bits} = this.state
//     return <div style={styles.container}>
//       <svg id="visualization"
//         width={width}
//         height={height}
//         xmlns="http://www.w3.org/2000/svg"
//         xmlnsXlink="http://www.w3.org/1999/xlink">
//         {
//           bits.map((bit, i) => {
//             const source = this.getPosition(bit.source)
//             const target = this.getPosition(bit.target)
//             const bitPlacement = {
//               x: source.x + (target.x - source.x) * bit.complete/100,
//               y: source.y + (target.y - source.y) * bit.complete/100
//             }
//             return <circle key={'bit' + i} style={{fill:`hsl(${bit.color}, 100%, 50%)`}} cx={bitPlacement.x} cy={bitPlacement.y} r="2"/>
//           })
//         }
//         {
//           relModel.nodes.map(({color, max}, i) => {
//             const {x,y} = this.getPosition(i)
//             return <circle key={i} style={{fill:`hsl(${color}, 100%, 50%)`, zIndex: 10}} cx={x} cy={y} r="10"/>
//           })
//         }
//
//       </svg>
//     </div>
//   }
// }
//
// export default RelDefinition;
//
// const styles = {
//   container: {
//     padding: 20
//   }
// }
