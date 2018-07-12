import React, {Component} from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard'
import AlbumForm from './AlbumForm'
import {connect} from 'react-redux';
import {getAlbums} from '../actions/albums';

class Albums extends Component {
  
  componentDidMount(){
    this.props.getAlbums()
  }

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

export default connect(mapStateToProps,{ getAlbums })(Albums);

