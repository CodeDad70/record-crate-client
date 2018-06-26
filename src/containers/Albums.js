import React from 'react';
import './Albums.css';

const Albums = (props) => (
  <div>
    <h1>Albums I Own </h1>
    {props.albums.map(album => 
      <div key={album.id} className = "AlbumCard">
          <div className = "card card-1">
        <h3> {album.name} </h3>
        <p> ${album.price} </p>
        <img className="AlbumImage" src = {album.image_url} alt={album.name} / >  
      </div>   
      </div>
    )}
  </div>
);

export default Albums;

