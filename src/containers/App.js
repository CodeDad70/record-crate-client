import React, {Component} from 'react';
import '../App.css'
import Albums from './Albums'


const albums = [
  {
    name: "the cure"
  },
  {
    name: "the smiths"
  }
]

class App extends Component {
  render() {
    return (
      <div className = "App">
        
        <Albums albums={albums} />
      </div>
    )
  };
}


export default App;