import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

const ClientPortalSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

const LoginCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(166, 207, 79, 0.1);
  }
`;

const Icon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;
`;

const SubmitButton = styled.button`
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    background: #b8e15f;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
  }
`;

const ForgotPasswordLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const ClientPortal = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <ClientPortalSection>
      <Container>
        <LoginCard>
          <Title>Client Portal</Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Icon>
                <FontAwesomeIcon icon={faEnvelope} />
              </Icon>
              <Input type="email" placeholder="Email" required />
            </FormGroup>
            <FormGroup>
              <Icon>
                <FontAwesomeIcon icon={faLock} />
              </Icon>
              <Input type="password" placeholder="Password" required />
            </FormGroup>
            <SubmitButton type="submit">Login</SubmitButton>
            <ForgotPasswordLink to="/forgot-password">Forgot Password?</ForgotPasswordLink>
          </Form>
        </LoginCard>
      </Container>
    </ClientPortalSection>
  );
};

export default ClientPortal; 