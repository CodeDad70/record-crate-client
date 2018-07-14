import React, {Component} from 'react';
import {connect} from 'react-redux';

class AlbumForm extends Component {
  render(){
    const {name, artist, price, image_url} = this.props.albumFormData
    return(
      <div>
        Add an Album
        <form>
          
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            name = "name"
            value = {name}
          />
         
          
          <label htmlFor="artist">Artist: </label>
          <input 
            type="text"
            name = "artist"
            value = {artist}
          />

          <label htmlFor="price">Price: </label>
          <input 
            type="decimal"
            name = "price"
            value = {price}
          />

          <label htmlFor="name">Image URL: </label>
          <input 
            type="text"
            name = "image_url"
            value = {image_url}
          />
         
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    albumFormData: state.albumFormData 
  }
}

export default connect(mapStateToProps)(AlbumForm)