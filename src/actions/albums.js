const API_URL = process.env.REACT_APP_API_URL;

//action creators

const setAlbums = Albums => {
  return {
    type: 'GET_ALBUMS_SUCCESS',
    albums

  }
}

//  -- Async Actions -- 
const getAlbums =  () => {
  dispatch => {
    fetch(`${API_URL}/albums`)
    .then(response => response.json())
    .then(albums => dispatch(setAlbums))
    .catch(error => console.log(error)); 
  }
}




