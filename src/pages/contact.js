import React from 'react'
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import Contact from '../components/contact/Contact';

const ContactPage = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];

  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Contact | Sorcha Thompson</title>
      </Helmet> 
      <Contact localeData={localeData.contact} />
    </Layout>
  )
}

export default ContactPage;