import React, {Component} from 'react';
import '../App.css'
import Albums from './Albums'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = { 
        albums: []
      
      }
  }
  componentDidMount() {
    fetch(`${API_URL}/albums`)
      .then(response => response.json())
      .then(albums=> this.setState({albums}))
  }


  render() {
    return (
      <div className = "App">      
        <Albums albums={this.state.albums} />
      </div>
    )
  };
}


export default App;