import React from 'react';

const Albums = (props) => (
  <div>
    <h1>Albums !! </h1>
    {props.albums.map(album => 
      <h3> {album.name} </h3>
    )}
  </div>
);

export default Albums;

