import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ComingSoonSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 4rem 2rem;
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Icon = styled.div`
  font-size: 4rem;
  color: #3498db;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #6c757d;
  font-size: 1.1rem;

  a {
    color: #3498db;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #2980b9;
    }
  }
`;

const ComingSoon = () => {
  return (
    <ComingSoonSection>
      <Content>
        <Icon>
          <FontAwesomeIcon icon={faClock} />
        </Icon>
        <Title>Client Portal Coming Soon</Title>
        <Subtitle>
          We're working hard to bring you a secure and convenient client portal. 
          Soon you'll be able to access your documents, communicate with us, and manage your account online.
        </Subtitle>
        <ContactInfo>
          <FontAwesomeIcon icon={faEnvelope} />
          <p>
            For now, please contact us at{' '}
            <a href="mailto:info@naseemcpa.com">info@naseemcpa.com</a>
          </p>
        </ContactInfo>
      </Content>
    </ComingSoonSection>
  );
};

export default ComingSoon; 