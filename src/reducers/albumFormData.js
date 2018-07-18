const initialState = {
  name: '', 
  price: 0,
  image_url: '',
}

export default (state = initialState, action ) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.albumFormData
    
    case 'RESET_ALBUM_FORM':
      return state
    
    default:
      return initialState
  }
}