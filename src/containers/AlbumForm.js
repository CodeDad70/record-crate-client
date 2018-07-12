import React, {Component} from 'react';
import {connect} from 'react-redux';

class AlbumForm extends Component {
  render(){
    return(
      <div>
        Add an Album
        <form>

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