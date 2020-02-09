import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ image }) => (
  <div>
    <img src={image.image}/>
  </div>
  <div>
    <Link to={`/images/${image._id}`}>{image.name}</Link>
  </div>
)

export default ImageCard