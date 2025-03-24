import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import QuickActions from '../../components/QuickActions';
import Industries from '../../components/Industries';
import { theme } from '../../styles/theme';

const HomeContainer = styled.div`
  width: 100%;
`;

const ConsultationSection = styled.section`
  background: ${theme.colors.gradient.primary};
  padding: 5rem 2rem;
  text-align: center;
  color: ${theme.colors.text.light};
`;

const ConsultationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ConsultationTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const ConsultationSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const ConsultationButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  background-color: ${theme.colors.secondary};
  border-radius: 30px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b8e15f;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
  }
`;

const PrivacyText = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 1rem;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const BenefitItem = styled.li`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(166, 207, 79, 0.2);
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: ${theme.colors.secondary};
  }
  
  p {
    font-size: 0.95rem;
    opacity: 0.9;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <QuickActions />
      <Industries />
      <ConsultationSection>
        <ConsultationContainer>
          <ConsultationTitle>Ready to Transform Your Business?</ConsultationTitle>
          <ConsultationSubtitle>
            Schedule a free consultation with our expert accountants and discover how we can help your business thrive.
          </ConsultationSubtitle>
          <BenefitsList>
            <BenefitItem>
              <h3>Expert Guidance</h3>
              <p>Get personalized advice from certified professionals with years of industry experience.</p>
            </BenefitItem>
            <BenefitItem>
              <h3>Tailored Solutions</h3>
              <p>Receive customized strategies that align with your business goals and industry requirements.</p>
            </BenefitItem>
            <BenefitItem>
              <h3>Time Savings</h3>
              <p>Focus on growing your business while we handle the complex financial details.</p>
            </BenefitItem>
          </BenefitsList>
          <ConsultationButton to="/contact">Schedule Free Consultation</ConsultationButton>
          <PrivacyText>Your information is protected by our privacy policy</PrivacyText>
        </ConsultationContainer>
      </ConsultationSection>
    </HomeContainer>
  );
};

export default Home; 