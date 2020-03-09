import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/globalStyle'
import { theme } from '../styles/mainTheme';
import Footer from '../components/Footer/Footer';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.color.white};
`;

const MenuLayout = ({ children }) => (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <StyledWrapper>
            {children}
            <Footer />
          </StyledWrapper>
        </>
      </ThemeProvider>
);

MenuLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MenuLayout;