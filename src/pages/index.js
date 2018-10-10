import React from 'react';

import '../reboot.css';
import '../index.css';

import Layout from '../components/Layout';
import Landing from '../components/Landing';
import Bio from '../components/Bio';

const Index = () => {
  return (
    <Layout>
      <Landing />
      <Bio />
    </Layout>
  );
};

export default Index;
