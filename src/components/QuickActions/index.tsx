import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const QuickActionsSection = styled.section`
  padding: 4rem 2rem;
  background: ${theme.colors.background};
  position: relative;
  z-index: 1;
  margin-top: -50px;
`;

const SectionTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

const ActionsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${theme.colors.primary};
  transition: all 0.3s ease;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  transition: color 0.3s ease;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.5;
`;

const ActionCard = styled(Link)`
  background: ${theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  text-decoration: none;
  color: ${theme.colors.primary};
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 4px 6px rgba(0, 0, 0, 0.1),
      0 1px 3px rgba(0, 0, 0, 0.08);

    &::before {
      transform: scaleX(1);
    }

    ${Icon} {
      transform: scale(1.1);
      color: ${theme.colors.secondary};
    }

    ${Title} {
      color: ${theme.colors.secondary};
    }
  }
`;

const QuickActions = () => {
  const actions = [
    {
      icon: faUserCircle,
      title: 'Client Portal',
      description: 'Access your documents and communicate with us securely.',
      to: '/client-portal'
    },
    {
      icon: faPhone,
      title: 'Call Us',
      description: 'Get immediate assistance from our expert team.',
      to: 'tel:+1234567890'
    },
    {
      icon: faEnvelope,
      title: 'Contact',
      description: 'Send us a message and we\'ll get back to you shortly.',
      to: '/contact'
    }
  ];

  return (
    <QuickActionsSection>
      <SectionTitle>Quick Access</SectionTitle>
      <ActionsGrid>
        {actions.map((action, index) => (
          <ActionCard key={index} to={action.to}>
            <Icon>
              <FontAwesomeIcon icon={action.icon} />
            </Icon>
            <Title>{action.title}</Title>
            <Description>{action.description}</Description>
          </ActionCard>
        ))}
      </ActionsGrid>
    </QuickActionsSection>
  );
};

export default QuickActions; 