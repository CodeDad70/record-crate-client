import React, {Component} from 'react';
import '../App.css'
import Albums from './Albums'

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  
  componentDidMount() {
    fetch(`${API_URL}/albums`)
      .then(response => response.json())
  }

  render() {
    return (
      <div className = "App">      
        <Albums />
      </div>
    )
  };
}

export default App;