import React from 'react'
import axios from 'axios'

class SingleImage extends React.Component {

  constructor() {
    super()
    this.state = {
      image: null,
      err: false
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://cheesebored.herokuapp.com/cheeses/${id}`)
      .then(resp => this.setState({ iamge: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))
  }

  render() {
    console.log(this.state.image)
    if (!this.state.iamge) return null
    if (this.state.err === 404) {
      return <h1>404 - Imgae not found</h1>
    }
    return <div>
      <p>
        {this.state.image.name}
      </p>
      <p>
        {this.state.location}
      </p>
      <p>
        {this.state.description}
      </p>
    </div>
  }
}

export default SingleImage