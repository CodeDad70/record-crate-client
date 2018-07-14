import React, {Component} from 'react';
import {connect} from 'react-redux';

class AlbumForm extends Component {
  render(){
    const {name, price, image_url} = this.props.albumFormData
    return(
      <div>
        Add an Album
        <form>
          <label htmlFor="name">Name: </label>
          <input 
            type="text"
            name = "name"
            value = {name}
            >
            </input>

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