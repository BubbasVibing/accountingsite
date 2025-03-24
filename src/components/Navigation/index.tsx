import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: white;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MainNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    color: #3498db;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  position: relative;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;

  &:hover {
    color: #3498db;
  }
`;

const PortalButton = styled(Link)`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 10px rgba(52, 152, 219, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
    background: linear-gradient(135deg, #2980b9, #2472a4);
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <MainNav>
        <Logo to="/">
          Naseem<span>CPA</span>
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <PortalButton to="/client-portal">Client Portal</PortalButton>
        </NavLinks>
      </MainNav>
    </Nav>
  );
};

export default Navigation; 