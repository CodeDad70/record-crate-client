import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateAlbumFormData} from '../actions/albumForm'

class AlbumForm extends Component {

  handleOnChange = event => {
    const {name, value} = event.target
    const currentAlbumFormData = Object.assign({}, this.props.albumFormData,{
      [name] : value
    }) 
    this.props.updateAlbumFormData(currentAlbumFormData)
  }
  
  handleOnSubmit =  event => {
    event.preventDefault()
    console.log('for success')
  }

  render(){
    const {name, artist, price, image_url} = this.props.albumFormData
    return(
      <div>
        Add an Album
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              type="text"
              onChange = {this.handleOnChange}
              name = "name"
              value = {name}
            />
          </div>
         
         <br/>

          <div>
            <label htmlFor="artist">Artist: </label>
            <input 
              type="text"
              onChange = {this.handleOnChange}
              name = "artist"
              value = {artist}
            />
          </div>

          <br/>

          <div>
            <label htmlFor="price">Price: </label>
            <input 
              type="number"
              onChange = {this.handleOnChange}
              name = "price"
              value = {price}
            />
          </div>

          <br/>

          <div>
            <label htmlFor="name">Image URL: </label>
            <input 
              type="text"
              onChange = {this.handleOnChange}
              name = "image_url"
              value = {image_url}
            />
          </div>
         <button type="submit"> Add an Album </button>
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

export default connect(mapStateToProps, {updateAlbumFormData})(AlbumForm)