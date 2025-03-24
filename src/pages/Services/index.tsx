import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #3498db;
    border-radius: 2px;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #3498db;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: #666;

    &::before {
      content: '✓';
      color: #2ecc71;
      margin-right: 10px;
      font-weight: bold;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9, #2472a4);
  }
`;

const Services = () => {
  const services = [
    {
      id: 'tax-returns',
      icon: '📊',
      title: 'Tax Returns & Planning',
      description: 'Comprehensive tax preparation and strategic planning services for individuals and businesses.',
      features: [
        'Personal Tax Returns',
        'Business Tax Returns',
        'Tax Planning & Strategy',
        'Tax Compliance Review'
      ]
    },
    {
      id: 'business-services',
      icon: '💼',
      title: 'Business Services',
      description: 'Complete business accounting and consulting services to help your business grow.',
      features: [
        'Business Formation',
        'Financial Statements',
        'Business Consulting',
        'Growth Strategy'
      ]
    },
    {
      id: 'payroll',
      icon: '💰',
      title: 'Payroll & Bookkeeping',
      description: 'Professional payroll and bookkeeping services to keep your business running smoothly.',
      features: [
        'Payroll Processing',
        'Bookkeeping Services',
        'Financial Records',
        'Monthly Reports'
      ]
    },
    {
      id: 'immigration',
      icon: '🌍',
      title: 'Immigration Services',
      description: 'Expert immigration tax and financial services for international clients.',
      features: [
        'Immigration Tax Planning',
        'International Tax Returns',
        'Visa Financial Support',
        'Cross-Border Services'
      ]
    },
    {
      id: 'translation',
      icon: '📝',
      title: 'Translation & Notary',
      description: 'Professional translation and notary services for all your documentation needs.',
      features: [
        'Document Translation',
        'Notary Services',
        'Certified Copies',
        'Legal Documentation'
      ]
    }
  ];

  return (
    <ServicesSection>
      <Container>
        <Header>
          <Title>Our Services</Title>
          <Subtitle>
            Comprehensive financial solutions tailored to meet your specific needs. 
            We provide expert services to help you achieve your financial goals.
          </Subtitle>
        </Header>

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.id} id={service.id}>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <div style={{ textAlign: 'center' }}>
          <CTAButton to="/contact">Get Started Today</CTAButton>
        </div>
      </Container>
    </ServicesSection>
  );
};

export default Services; 