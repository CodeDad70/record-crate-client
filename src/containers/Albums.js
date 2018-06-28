import React from 'react';
import './Albums.css';
import AlbumCard from '../components/AlbumCard'

const Albums = (props) => (
  <div>
    <h1>Albums I Own </h1>
      {props.albums.map(album => <AlbumCard key={album.id} album={album} />)}  
  </div>
);

export default Albums;

