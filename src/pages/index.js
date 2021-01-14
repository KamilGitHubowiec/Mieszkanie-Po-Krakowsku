import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header'
import BlogPost from '../components/blogPost'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Strona główna"/>
      <Header />
      <BlogPost />
    </Layout>
  )
}

export default IndexPage