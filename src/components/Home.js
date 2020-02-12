import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="Home">
    <div>
      <h1><Link to="/">Photobook</Link></h1>
    </div>
    <div>
      <h3>By Sarah Wood</h3>
    </div>
  </section>
)

export default Home