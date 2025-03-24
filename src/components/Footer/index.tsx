import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: ${theme.colors.primary};
  color: white;
  padding: 4rem 2rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.secondary};
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;

  h3 {
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;

  svg {
    color: ${theme.colors.secondary};
  }
`;

const HoursList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.95rem;
  width: 100%;
  max-width: 200px;
`;

const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  text-align: left;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <h3>Quick Links</h3>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/industries">Industries</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Services</h3>
          <FooterLinks>
            <FooterLink to="/services#tax">Tax Services</FooterLink>
            <FooterLink to="/services#bookkeeping">Bookkeeping</FooterLink>
            <FooterLink to="/services#payroll">Payroll</FooterLink>
            <FooterLink to="/services#consulting">Business Consulting</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <h3>Contact Info</h3>
          <ContactInfo>
            <ContactItem>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>4249 Walnut St, Philadelphia, PA 19104</span>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faPhone} />
              <span>(215) 386-1321</span>
            </ContactItem>
            <ContactItem>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>info@naseemcpa.com</span>
            </ContactItem>
          </ContactInfo>
        </FooterColumn>

        <FooterColumn>
          <h3>Business Hours</h3>
          <HoursList>
            <HoursItem>
              <span>Monday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Tuesday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Wednesday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Thursday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Friday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Saturday</span>
              <span>9 AM - 8 PM</span>
            </HoursItem>
            <HoursItem>
              <span>Sunday</span>
              <span>9 AM - 5 PM</span>
            </HoursItem>
          </HoursList>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Naseem CPA. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 