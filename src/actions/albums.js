import {resetAlbumForm} from './albumForm';

const API_URL = process.env.REACT_APP_API_URL;

//action creators

const setAlbums = albums => {
  return {
    type: 'GET_ALBUMS_SUCCESS',
    albums
  }
}

const addAlbum = album => {
  return {
    type: 'CREATE_ALBUM_SUCCESS',
    album
  }
}

//  -- Async Actions -- 
export const getAlbums =  () => {
  return dispatch => {
   
    return fetch(`${API_URL}/albums`)
    .then(response => response.json())
    .then(albums => dispatch(setAlbums(albums)))
    .catch(error => console.log(error)); 
  }
}

export const createAlbum = album => {
  return dispatch => {
    return fetch (`${API_URL}/albums`, {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify({album: album})
    })
    .then (response => response.json())
    .then(album => {
      dispatch(addAlbum(album))
      dispatch(resetAlbumForm())
    })
    .catch(error=>console.log(error))
  }
}



