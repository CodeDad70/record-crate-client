// -- Action Creator ////

export const updateAlbumFormData = albumFormData => {
  return {
    type: "UPDATED_DATA",
    albumFormData
  }
}

export const resetAlbumForm = () => {
  return {
    type: "RESET_ALBUM_FORM"
  }

}