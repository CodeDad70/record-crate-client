import React, {Component} from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard'
import AlbumForm from './AlbumForm'
import {connect} from 'react-redux';

class Albums extends Component {
  render() {
    return (
      <div>
        <h1>Albums I Own </h1>
          {this.props.albums.map(album => <AlbumCard key={album.id} album={album} />)}
          <AlbumForm/>  
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return ({
    albums: state.albums
  })
}

export default connect(mapStateToProps)(Albums);

