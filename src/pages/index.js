import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header'
import RecentBlogPost from '../components/recentBlogPost'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Strona główna" />
      <Header />
      <RecentBlogPost />
    </Layout>
  )
}

export default IndexPage
