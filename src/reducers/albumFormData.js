export default (state = {
  name: '', 
  price: 0,
  image_url: '',
}, action ) => {
  switch(action.type) {
    case 'UPDATED_DATA':
      return action.albumFormData
    
    default:
      return state
  }
}