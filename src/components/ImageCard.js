import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ image }) => (
  <div>
    <figure>
      <img src={image.image}/>
    </figure>
    <Link to={`/images/${image._id}`}>{image.name}</Link>
  </div>
)

export default ImageCard