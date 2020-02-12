import React from 'react'
import { Link } from 'react-router-dom'

const ImageCard = ({ image }) => (
  <div className="row">
    <div className="col">
      <figure>
        <img src={image.image}/>
      </figure>
    </div>
    <Link to={`/images/${image._id}`}>{image.name}</Link>
  </div>
)

export default ImageCard