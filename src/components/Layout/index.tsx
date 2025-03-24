import { ReactNode } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px; // Height of the navigation
`;

const Footer = styled.footer`
  background-color: #2c3e50;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Navigation />
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>About Us</h3>
            <p>Professional accounting services tailored to your needs.</p>
          </FooterSection>
          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Services</h3>
            <ul>
              <li><a href="/tax">Tax Planning</a></li>
              <li><a href="/audit">Audit Services</a></li>
              <li><a href="/consulting">Business Consulting</a></li>
              <li><a href="/bookkeeping">Bookkeeping</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h3>Contact Info</h3>
            <ul>
              <li>123 Business Street</li>
              <li>City, State 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@naseemcpa.com</li>
            </ul>
          </FooterSection>
        </FooterContent>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout; 