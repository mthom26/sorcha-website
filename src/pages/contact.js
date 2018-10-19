import React from 'react'
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Contact from '../components/contact/Contact';

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact | Sorcha Thompson</title>
      </Helmet> 
      <Contact />
    </Layout>
  )
}

export default ContactPage;