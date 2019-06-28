import React, {Component} from 'react'
import RelModel from '../relmodel'
import ProbabilityGraph from './ProbabilityGraph'
import RelVisualization from './RelVisualization'
import EntropyGraph from './EntropyGraph'
import RelationalityGraph from './RelationalityGraph'
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
      relTimer: null,
      bits: [],
      entropy: []
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
      const {numNodes, width} = this.props
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
        clearInterval(this.state.relTimer)
        const stepTimer = setInterval(runStep, 250)
        const bitTimer = setInterval(runBits, 20)
        const relModel = new RelModel(this.props.numNodes)
        const relTimer = setInterval(relModel.updateRelationality, 500)
        this.setState({
          relModel: new RelModel(this.props.numNodes),
          stepTimer,
          bitTimer,
          relModel,
          relIndex: 0,
          bits: []})
    }
  }

  componentDidMount() {
    const {numNodes} = this.props
    this.restart(this.props.numNodes)
  }

  componentWillUnmount() {
    const {stepTimer, bitTimer, relTimer} = this.state
    clearInterval(stepTimer)
    clearInterval(bitTimer)
    clearInterval(relTimer)
  }

  render() {
    const {height, width, showProbabilities, numNodes} = this.props
    const {relModel, bits, entropy} = this.state
    return <div style={styles.container}>
      <RelVisualization
        width={width}
        height={height}
        relModel={relModel}
        bits={bits}
        getPosition={this.getPosition}
        entropy={entropy} />
        <IconButton aria-label="Restart" onClick={this.restart}>
          <ReplayIcon fontSize="medium" />
        </IconButton>
      {
        showProbabilities &&
        <div>
          <div style={styles.text}>
            As relationships form, the probability distributions within a system become more stable.
          </div>
          <ProbabilityGraph
            width={width}
            height={110}
            nodes={[relModel.nodes[numNodes/4], relModel.nodes[3 * numNodes/4]]} />
          <div style={styles.text}>
            A variable called <a href="https://en.wikipedia.org/wiki/Entropy">entropy</a> measures the randomness of these probability distrubutions.
            It goes up when many states are equally possible, and goes down when a few states are likely.
            By looking for where it goes down we can track how nodes in the system become form stable relationships.
          </div>
          <div style={styles.bigNumber}>Entropy: {relModel.entropy.toPrecision(2)}</div>
          <EntropyGraph
            width={width}
            height={40}
            relmodel={{
              ...relModel,
              nodes: [relModel.nodes[numNodes/4], relModel.nodes[3 * numNodes/4]],
              entropy: relModel.nodes[numNodes/4].entropy + relModel.nodes[3 * numNodes/4].entropy,
              maxEntropy: Math.log1p(1/20) * 20 * 2,
              minEntropy: Math.log1p(1) * 2
            }} />
          <div style={styles.text}>
            It can also be helpful to examine how quickly a system forms stable relationships.
            This "speed of relationship" is what we will call "relationality."
          </div>
          <RelationalityGraph
            width={width}
            height={100}
            nodes={[relModel.nodes[numNodes/4], relModel.nodes[3 * numNodes/4]]}
            numNodes={relModel.nodes.length} />
          <div style={styles.text}>
            Examining the relationality of a system can give insight into how it
            will behave. Some systems are more relational than others (they have a greater)
            "speed of relationship". With enough knowledge, one can intervene
            in systems to make them more or less relational. But there are limits.
          </div>
        </div>
      }
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
  },
  text: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'left'
  },
  bigNumber: {
    margin: 10,
    fontSize: 16
  }

}
