import React from 'react';
import { Helmet } from 'react-helmet';

import locales from '../data/locales';

import Layout from '../components/Layout';
import ImpressumComponent from '../components/impressum/ImpressumComponent';

const Impressum = ({ data, pageContext }) => {
  const { locale } = pageContext;
  const { localeData } = locales[locale];
  
  return (
    <Layout localeData={localeData} locale={locale}>
      <Helmet>
        <title>Impressum | Sorcha Thompson</title>
      </Helmet>
      <ImpressumComponent />     
      {/* <Gigs localeData={localeData.gigs} data={data} /> */}
    </Layout>
  );
};

export default Impressum;