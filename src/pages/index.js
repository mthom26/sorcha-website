import React from 'react';

import Layout from '../components/Layout';
import Landing from '../components/Home/Landing';
import Bio from '../components/Home/Bio';
import UpcomingGigs from '../components/Home/UpcomingGigs';
import LandingBlogPosts from '../components/Home/LandingBlogPosts';

const Index = () => {
  return (
    <Layout>
      <Landing />
      <Bio />
      <UpcomingGigs />
      <LandingBlogPosts />
    </Layout>
  );
};

export default Index;
