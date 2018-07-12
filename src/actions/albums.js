const API_URL = process.env.REACT_APP_API_URL;

//action creators

const setAlbums = albums => {
  return {
    type: 'GET_ALBUMS_SUCCESS',
    albums
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




