import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import Header from '../components/header/header'
import PostGridView from '../components/postGridView/postGridView'
import ContactForm from '../components/contactForm/contactForm'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Strona główna" />
      <Header />
      <PostGridView />
      <ContactForm />
    </Layout>
  )
}

export default IndexPage
