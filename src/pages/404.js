import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
  return (
    <Layout>
      <Head title="Nie znaleziono" />
      <h1>Strony nie znaleziono</h1>
      <Link to="/">Wróć na strone główną</Link>
    </Layout>
  )
}

export default NotFound
