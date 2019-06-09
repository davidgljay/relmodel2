import React, {Component} from 'react'
import RelIntro from './RelIntro'
import RelDefinition from './RelDefinition'
import RelTemperature from './RelTemperature'
import RelColor from './RelColor'

class App extends Component {



  render () {
    return <div style={styles.pageContainer}>
      <div className="App" style={styles.container}>
        <h1>Relationality</h1>
        <h3>A mathematical framework for the measurement and prediction of relationship formation.</h3>
        <RelIntro/>
        <div style={styles.explainer}>
          An example of a mathematical model in which flows of information move
          from randomness to stability.<br/>
          Color illustrates how relational dynamics alter the state of a system
          over time.
        </div>
        <h3>Why Measure and Predict Relationships?</h3>
        <div style={styles.paragraph}>
          In 1949 a landmark scientific paper described a mathematical framework
          for measuring information in bits.
          This framework allowed scientists and engineers to precisely understand
          how information would behave regardless of what kind of information it was.
          By figuring out how to send, store and processing bits, scientists could
          send, store and process any kind of information.
        </div>
        <div style={styles.paragraph}>
          This project seeks to create a similar mathematical framework for
          relationships, one that will allow precise and meaningful predictions
          to be made about relationships regardless of the kind of relationships
          involved. The goal is not to control the outcome of relationships (in fact
          there are hard mathematical limits to such control), but to enable richer
          conversation about how to create environments in which relationships thrive.
        </div>
        <h3>What is a Relationship?</h3>
        <div style={styles.paragraph}>
          While relationships between humans are very different from
          relationships between bacteria or relationships between atoms, all involve
          <b> dynamic flows of information with the ability to stabilize over time. </b>
          By examining the fundamental properties of such flows of information
          it is possible to map out universal dynamics which all relationships
          share.
        </div>
        <RelDefinition height={150} width={350} numNodes={20}/>
        <div style={styles.paragraph}>
          Relationships form when information being randomly transmitted across
          a system finds a self-reinforcing feedback loop. These stable flows of
          information go on to reshape the entities sending and receiving them.
        </div>
        <RelColor height={350} width={350} radius={150}/>
        <div style={styles.paragraph}>
          However most relationships do not happen in a vacuum. New information from
          the surrounding environment constantly disrupts stable relational states.
          To persist, relationships must not only establish a stable flow of information,
          but continuously re-establish that flow in response to external stress.
          This ability to constant re-establishing of stability can be measured as
          relationality, the negative rate of change of entropy in a system of
          information exchange.
        </div>
        <RelTemperature height={150} width={350} numNodes={20}/>
      </div>
    </div>
  }
}

export default App

const styles = {
  pageContainer: {
    width: 'calc(100%-40px)',
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 80,
    fontFamily: 'Montserrat'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: 900,
    textAlign: 'center'
  },
  explainer: {
    fontStyle: 'italic',
    color: 'grey'
  },
  paragraph: {
    fontSize: 14,
    textAlign: 'left',
    padding: 10
  }
}
