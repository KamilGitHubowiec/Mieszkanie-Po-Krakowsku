import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import Header from '../components/header'
import BlogPost from '../components/blogPost'

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <BlogPost />
    </Layout>
  )
}

export default IndexPage