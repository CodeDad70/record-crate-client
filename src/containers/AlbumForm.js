import React, {Component} from 'react';
import {connect} from 'react-redux';

class AlbumForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target
    console.log(name)
  }    

  render(){
    const {name, artist, price, image_url} = this.props.albumFormData
    return(
      <div>
        Add an Album
        <form>
          
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            onChange = {this.handleOnChange}
            name = "name"
            value = {name}
          />
         
         <br/>

          <label htmlFor="artist">Artist: </label>
          <input 
            type="text"
            onChange = {this.handleOnChange}
            name = "artist"
            value = {artist}
          />

          <br/>

          <label htmlFor="price">Price: </label>
          <input 
            type="number"
            onChange = {this.handleOnChange}
            name = "price"
            value = {price}
          />

          <br/>

          <label htmlFor="name">Image URL: </label>
          <input 
            type="text"
            onChange = {this.handleOnChange}
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