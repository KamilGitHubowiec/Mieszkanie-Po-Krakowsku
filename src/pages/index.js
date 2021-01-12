import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import BlogPostTemplate from '../templates/BlogPostTemplate'

const IndexPage = () => {
  return (
    <Layout>
      <div>Hi Im Kamil</div>
      <BlogPostTemplate />
      {/* <img src="../images/HomeBackground.jpg" alt="Home Background" /> */}
    </Layout>
  )
}

export default IndexPage