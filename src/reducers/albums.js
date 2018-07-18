export default (state =[], action) => {
  switch(action.type) {
    case 'GET_ALBUMS_SUCCESS':
      return action.albums;

    case 'CREATE_ALBUM_SUCCESS':
      return state.concat(action.album);

  default:
    return state    
  }
}

