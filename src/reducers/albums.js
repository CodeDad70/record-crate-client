const albums = (state =[], action) => {
  switch(action.type) {
    case 'GET_ALBUMS_SUCCESS':
      return action.albums;

  default:
    return state    
  }
}

