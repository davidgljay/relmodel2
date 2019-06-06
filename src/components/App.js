import React, {Component} from 'react'
import RelCircle from './RelCircle'

class App extends Component {
  render () {
    return <div className="App" style={styles.container}>
      <h1>Colored Edgeless Network</h1>
      <p>Nodes ignore colors that are far from them on the spectrum and shift towards colors that they receive.</p>
      <RelCircle height='350' width='350' numNodes={15} radius={150}/>
      <div class="slidecontainer">
        <input type="range" min="2" max="50" value="10" class="slider" id="myRange"/>
      </div>
    </div>
  }
}

export default App

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center'
  }
}
