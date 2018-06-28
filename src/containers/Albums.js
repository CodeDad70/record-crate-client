import React, {Component} from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard'
import AlbumForm from './AlbumForm'

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
export default Albums;

