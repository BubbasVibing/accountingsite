import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCalculator, faFileAlt, faHandshake, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  background: url('/images/philadelphia.png') center/cover no-repeat;
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.primary};
    opacity: 0.45;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  color: ${theme.colors.text.light};
  padding-top: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${theme.colors.text.light};
  animation: ${fadeInUp} 1s ease-out;
  opacity: 0;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.8;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  max-width: 600px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 1s ease-out 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const ServicesCard = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  animation: ${fadeInUp} 1s ease-out 0.6s;
  opacity: 0;
  animation-fill-mode: forwards;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 400px;
  margin: 0 auto;
`;

const ServicesTitle = styled.div`
  color: ${theme.colors.primary};
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;

  &::after {
    content: '';
    width: 40px;
    height: 3px;
    background: ${theme.colors.secondary};
    margin-top: 0.5rem;
    position: absolute;
    bottom: -0.5rem;
    border-radius: 2px;
  }
`;

const ServicesList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
`;

const ServiceLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1.2rem 1.5rem;
  color: ${theme.colors.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  border-radius: 12px;
  font-size: 1.1rem;
  background: rgba(166, 207, 79, 0.05);
  border: 1px solid rgba(166, 207, 79, 0.1);

  &:hover {
    color: ${theme.colors.secondary};
    background: rgba(166, 207, 79, 0.1);
    transform: translateX(5px);
    border-color: ${theme.colors.secondary};
  }

  svg {
    margin-right: 12px;
    color: ${theme.colors.secondary};
    font-size: 1.3rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  margin-top: 2rem;
  box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  animation: ${fadeInUp} 1s ease-out 0.9s;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(166, 207, 79, 0.4);
    background: #b8e15f;
  }
`;

const SeeAllServices = styled(Link)`
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    transform: translateX(5px);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroText>
          <Title>Expert Tax & Accounting Services</Title>
          <Subtitle>
            Professional financial solutions for businesses and individuals in Philadelphia
          </Subtitle>
          <CTAButton to="/contact">Book a Meeting</CTAButton>
        </HeroText>
        <ServicesCard>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesList>
            <ServiceLink to="/services#tax-returns">
              <FontAwesomeIcon icon={faChartLine} />
              Tax Returns & Planning
            </ServiceLink>
            <ServiceLink to="/services#business-services">
              <FontAwesomeIcon icon={faCalculator} />
              Business Services
            </ServiceLink>
            <ServiceLink to="/services#payroll">
              <FontAwesomeIcon icon={faFileAlt} />
              Payroll Services
            </ServiceLink>
            <ServiceLink to="/services#consulting">
              <FontAwesomeIcon icon={faHandshake} />
              Business Consulting
            </ServiceLink>
            <ServiceLink to="/services#international">
              <FontAwesomeIcon icon={faLanguage} />
              International Tax
            </ServiceLink>
          </ServicesList>
          <SeeAllServices to="/services">View All Services →</SeeAllServices>
        </ServicesCard>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 