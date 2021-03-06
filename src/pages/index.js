import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MainPageMobileLayout from '../layouts/MainPageMobileLayout';
import Layout from '../layouts/Layout';
import HeaderText from '../components/HeaderText/HeaderText';
import Navigation from '../components/Navigation/Navigation';
import FacebookButton from '../components/FollowFacebookButton/FollowFacebookButton';
import SEO from '../components/Seo/Seo';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 991 });
  return isMobile ? children : null;
};

const IndexPage = ({ location }) => (
  <>
    <SEO title="Strona główna" pathname={location.pathname} />
    <Mobile>
      <MainPageMobileLayout>
        <HeaderText />
        <FacebookButton />
        <Navigation />
      </MainPageMobileLayout>
    </Mobile>
    <Desktop>
      <Layout>
        <HeaderText />
        <Navigation />
        <FacebookButton />
      </Layout>
    </Desktop>
  </>
);

export default IndexPage;
