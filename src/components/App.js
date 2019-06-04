import React from 'react'
import RelCircle from './RelCircle'

function App() {
  return (
    <div className="App">
      <h1>Relationality</h1>
      <RelCircle height='350' width='350' numNodes={30} radius={150}/>
    </div>
  );
}

export default App
