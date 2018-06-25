import React, {Component} from 'react';
import '../App.css'
import Albums from './Albums'



class App extends Component {
  constructor(props) {
    super(props) 
      this.state = { 
        albums: []
      
      }
  }
  componentDidMount() {
    fetch('localehost:3001/api/albums')
      .then(response => response.json())
      .then(albums=> this.setState({albums}))
      console.log(this.state)
  }


  render() {
    return (
      <div className = "App">
        
        <Albums albums={albums} />
      </div>
    )
  };
}


export default App;