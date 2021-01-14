import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import BlogPost from '../components/blogPost'

const IndexPage = () => {
  return (
    <Layout>
      <div>Hi Im Kamil</div>
      <BlogPost />
    </Layout>
  )
}

export default IndexPage