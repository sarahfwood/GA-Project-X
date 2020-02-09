import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
}

export default SingleImage