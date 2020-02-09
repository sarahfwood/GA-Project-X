import React from 'react'
import axios from 'axios'

import ImageCard from './ImageCard'

class Images extends React.Component {

  constructor() {
    super()
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    axios.get('https://cheesebored.herokuapp.com/cheeses')
      .then(res => this.setState({ images: res.data }))
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.images)
    return <div>
      {this.state.images.map((image, i) => {
        return <ImageCard key={i} image={image}/>
      })}
    </div>
  }
} 

export default Images