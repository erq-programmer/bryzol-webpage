/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Icon } from '@iconify/react';
import telephoneIcon from '@iconify/icons-foundation/telephone';
import Layout from '../../layouts/Layout';
import DinnerList from '../../components/DinnerList/DinnerList';
import PageHeader from '../../components/PageHeader/PageHeader';
import AddressSection from '../../components/AddressSection/AddressSection';
import SEO from '../../components/Seo/Seo';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media (min-width: 992px) {
    padding: 20px 20px 100px;
  }
`;

const ContentWrapper = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StyledPageHeaderWrapper = styled.div`
  padding: 20px 0 40px;
`;

const StyledInfoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 0 60px;
  width: 100%;
  height: 100%;

  @media (min-width: 992px) {
    order: -1;
    margin: 0;
    padding: 0 40px 60px;
    justify-content: flex-start;
  }
`;

const Heading = styled.h3`
  color: ${({ theme }) => theme.color.dark};
  font-size: 2.4rem;
  text-align: center;
  font-weight: 500;
  margin: 60px 0 20px;
`;

const Telephone = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.secondary};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: 500;

  & svg {
    transition: color 0.3s ease;
  }

  &:hover,
  &:active,
  &:hover svg,
  &:active svg {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const TelephoneIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.secondary};
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const MoreInfo = styled.p`
  color: ${({ theme }) => theme.color.dark};
  text-align: center;
  font-weight: 500;
  font-size: 2rem;
  margin: 60px 0 0;
`;

const LinkWrapper = styled.div`
  margin: 0 0 20px;
  padding: 0;
`;

const PriceList = styled.ul`
  color: ${({ theme }) => theme.color.dark};
  font-size: 2rem;
  font-weight: 500;
  list-style: none;

  li {
    text-align: center;
    margin: 0 0 10px;
    padding: 0;
  }
`;

const DinnerPage = ({ data, location }) => {
  const lastDay = data.allDatoCmsDinner.nodes[0].weekDays.length - 1;
  const subtitleWithDate = `Menu cateringowe: ${data.allDatoCmsDinner.nodes[0].weekDays[0].date} - ${data.allDatoCmsDinner.nodes[0].weekDays[lastDay].date}`;

  return (
    <Layout>
      <Wrapper>
        <SEO title="Obiady" pathname={location.pathname} />
        <StyledPageHeaderWrapper>
          <PageHeader nested title="Obiady" subtitle={subtitleWithDate} />
        </StyledPageHeaderWrapper>
        <ContentWrapper>
          <DinnerList />
          <StyledInfoWrapper>
            <Heading>Zamieszczamy menu na ten tydzień ❗❗</Heading>
            <Heading>
              Zamówienia na kolejny dzień przyjmujemy do godziny 9:00 tego samego dnia poprzez
              wiadomości na facebooku, oraz:
            </Heading>
            <LinkWrapper>
              <Telephone href="tel:502315715">
                <TelephoneIcon icon={telephoneIcon} />
                502 315 715
              </Telephone>
            </LinkWrapper>
            <Heading>Odbiór zamówień możliwy jest pod adresem:</Heading>
            <AddressSection dinners />
            <MoreInfo>
              Transport obiadu na terenie Żor to <strong>0zł</strong>. Cenę za dowóz do innych
              miejscowości ustalamy indywidualnie 🤝
            </MoreInfo>
            <Heading>Ile to kosztuje?</Heading>
            <PriceList>
              <li>
                Od poniedziałku do soboty to <strong>20zł</strong>
              </li>
              <li>
                Obiad niedzielny to <strong>27zł</strong>
              </li>
            </PriceList>
          </StyledInfoWrapper>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  {
    allDatoCmsDinner {
      nodes {
        weekDays {
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  }
`;
export default DinnerPage;
