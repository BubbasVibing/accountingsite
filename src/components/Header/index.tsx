import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { theme } from '../../styles/theme';

const HeaderContainer = styled.header`
  background: ${theme.colors.background};
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  gap: 0.5rem;

  img {
    height: 50px;
    width: auto;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
  font-size: 1rem;

  &:hover {
    color: ${theme.colors.secondary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.colors.secondary};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const ClientPortalButton = styled(Link)`
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    background: #b8e15f;
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  right: -100%;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  background: ${theme.colors.background};
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 1001;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);

  &[data-is-open="true"] {
    right: 0;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: ${theme.colors.primary};
  text-decoration: none;
  padding: 1rem 0;
  font-size: 1.2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  cursor: pointer;
`;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img src="/images/qtax-logo.png" alt="QTAX Logo" />
        </Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <ClientPortalButton to="/client-portal">
            <FontAwesomeIcon icon={faUserCircle} />
            Client Portal
          </ClientPortalButton>
        </Nav>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)}>
          <FontAwesomeIcon icon={faBars} />
        </MobileMenuButton>
      </HeaderContent>
      <MobileMenu data-is-open={isMobileMenuOpen}>
        <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </CloseButton>
        <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
        <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</MobileNavLink>
        <MobileNavLink to="/services" onClick={() => setIsMobileMenuOpen(false)}>Services</MobileNavLink>
        <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
        <MobileNavLink to="/client-portal" onClick={() => setIsMobileMenuOpen(false)}>
          <FontAwesomeIcon icon={faUserCircle} /> Client Portal
        </MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header; 