import React from 'react';

const AlbumCard  = ({album}) => (
  <div key={album.id} className = "AlbumCard">
    <div className = "card card-1">
      <h3> {album.name} </h3>
      <p> ${album.price} </p>
      <img className="AlbumImage" src = {album.image_url} alt={album.name} / >  
    </div>   
  </div>
)

export default AlbumCard;

