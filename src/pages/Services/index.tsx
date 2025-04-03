import { useState, useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChevronRight, 
  faChartLine, 
  faBriefcase, 
  faMoneyBillWave, 
  faGlobe, 
  faLanguage,
  faCheckCircle,
  faShieldAlt,
  faChartBar,
  faFileInvoiceDollar,
  faHandshake,
  faLightbulb,
  faUsers,
  faCalculator,
  faTrophy,
  faUniversity,
  faComments,
  faArrowAltCircleRight,
  faCogs,
  faBullseye,
  faBalanceScale,
  faBookOpen,
  faStamp,
  faStar,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInUp = keyframes`
  from { 
    transform: translateY(30px);
    opacity: 0;
  }
  to { 
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(166, 207, 79, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(166, 207, 79, 0); }
  100% { box-shadow: 0 0 0 0 rgba(166, 207, 79, 0); }
`;

const rotateIn = keyframes`
  from { transform: rotate(-15deg) scale(0.9); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
`;

// Shared styles
const SectionBase = css`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
`;

// Basic styled components
const ServicesSection = styled.section`
  background: white;
  overflow-x: hidden;
`;

const HeroSection = styled.div`
  padding: 12rem 2rem 8rem;
  position: relative;
  overflow: hidden;
  background: url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80') center/cover no-repeat;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${theme.colors.primary}f0, ${theme.colors.primary}99);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 900px;
  margin: 0 auto;
  animation: ${fadeIn} 1.2s ease;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.4rem;
  line-height: 1.8;
  margin-top: 1.5rem;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ServiceBlock = styled.section`
  ${SectionBase}
  background: white;
  
  &:nth-child(even) {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  &.highlight-section {
    background: linear-gradient(135deg, #f0f7e6 0%, #e8f5d8 100%);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: ${theme.colors.primary};
  margin-bottom: 1rem;
  text-align: center;
  position: relative;
  padding-bottom: 1.5rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.text.secondary};
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  line-height: 1.7;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Enhanced Professional Services section
const ProfessionalServices = styled.div`
  margin-top: 4rem;
  position: relative;
`;

// New creative service layout
const ServiceGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: radial-gradient(ellipse at center, rgba(166, 207, 79, 0.3), transparent 80%);
    z-index: 1;
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 2rem;
  }
`;

const ServiceModule = styled.div<{size?: string}>`
  position: relative;
  z-index: 2;
  grid-column: ${props => props.size === 'large' ? 'span 8' : 'span 4'};
  
  @media (max-width: 1024px) {
    grid-column: span 1;
  }
`;

const ServiceItem = styled.div<{position?: string}>`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: ${props => props.position === 'horizontal' ? 'row' : 'column'};
  transform-origin: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    z-index: 3;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
    z-index: 1;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`;

const ServiceVisual = styled.div<{bg?: string}>`
  flex: ${props => props.bg ? '0 0 40%' : '0'};
  background: ${props => props.bg ? `url(${props.bg}) center/cover no-repeat` : theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.bg ? '300px' : 'auto'};
  overflow: hidden;
  
  @media (max-width: 1024px) {
    min-height: 200px;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(19, 42, 76, 0.5), rgba(19, 42, 76, 0.8));
    z-index: 1;
  }
`;

const ServiceIconWrapper = styled.div<{serviceCategory?: string}>`
  width: 90px;
  height: 90px;
  background: ${props => {
    if (props.serviceCategory === 'wealth-management' || 
        props.serviceCategory === 'compliance' ||
        props.serviceCategory === 'business-services' ||
        props.serviceCategory === 'payroll') {
      return theme.colors.primary + '20'; // Light primary color
    }
    return 'rgba(255, 255, 255, 0.1)';
  }};
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => {
    if (props.serviceCategory === 'wealth-management' || 
        props.serviceCategory === 'compliance' ||
        props.serviceCategory === 'business-services' ||
        props.serviceCategory === 'payroll') {
      return theme.colors.primary;
    }
    return 'white';
  }};
  font-size: 2.5rem;
  z-index: 2;
  position: relative;
  transition: all 0.5s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  ${ServiceItem}:hover & {
    transform: scale(1.1) rotate(10deg);
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`;

const ServiceContent = styled.div`
  padding: 2.5rem;
  flex: 1;
  
  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 40px;
      height: 3px;
      background: ${theme.colors.secondary};
      transition: width 0.3s ease;
    }
  }
  
  ${ServiceItem}:hover h3::after {
    width: 80px;
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 0.8rem;
  
  li {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    padding: 0.5rem 0;
    color: ${theme.colors.text.secondary};
    
    .icon {
      color: ${theme.colors.secondary};
      flex-shrink: 0;
    }
  }
`;

const ServiceActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ServiceButton = styled(Link)<{variant?: string}>`
  padding: 0.9rem 1.5rem;
  background: ${props => props.variant === 'primary' ? theme.colors.primary : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : theme.colors.primary};
  border: 2px solid ${props => props.variant === 'primary' ? theme.colors.primary : 'transparent'};
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  justify-content: center;
  
  .icon {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: ${props => props.variant === 'primary' ? theme.colors.secondary : 'rgba(19, 42, 76, 0.05)'};
    color: ${props => props.variant === 'primary' ? theme.colors.primary : theme.colors.primary};
    border-color: ${props => props.variant === 'primary' ? theme.colors.secondary : 'transparent'};
    transform: translateY(-3px);
    
    .icon {
      transform: translateX(3px);
    }
  }
`;

// Enhanced Tab Functionality for Specialty Services
const ServiceTabs = styled.div`
  display: flex;
  padding: 0 1.5rem;
  margin-top: 2rem;
  border-bottom: 1px solid #eaeaea;
`;

const ServiceTab = styled.button<{active?: boolean}>`
  background: none;
  border: none;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.active ? theme.colors.primary : theme.colors.text.secondary};
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 3px;
    width: ${props => props.active ? '100%' : '0'};
    background: ${theme.colors.secondary};
    border-radius: 3px 3px 0 0;
    transition: all 0.3s ease;
  }
  
  &:hover:not(.active) {
    color: ${theme.colors.primary};
    
    &::after {
      width: 30%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const ServiceTabContent = styled.div`
  padding: 2.5rem;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardActions = styled.div`
  padding: 1.5rem 2.5rem 2.5rem;
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 3rem 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .value {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
  }
  
  .label {
    font-size: 1.1rem;
    color: ${theme.colors.secondary};
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 45%;
    
    .value {
      font-size: 2.5rem;
    }
  }
`;

// Process Section Components
const ProcessSection = styled(ServiceBlock)`
  background: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
    z-index: 1;
  }
`;

const ProcessStepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const ProcessStep = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 230px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 15px rgba(166, 207, 79, 0.3);
`;

const StepContent = styled.div`
  h4 {
    font-size: 1.3rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.8rem;
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

// CTA Section Components
const CTASection = styled.section`
  padding: 6rem 2rem;
  background: ${theme.colors.primary};
  position: relative;
  overflow: hidden;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.03);
    z-index: 1;
  }
  
  &::before {
    top: -150px;
    left: -150px;
  }
  
  &::after {
    bottom: -150px;
    right: -150px;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }
  
  .icon {
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: translateX(5px);
  }
`;

// Enhanced Testimonial Section styles
const TestimonialSection = styled(ServiceBlock)`
  background: linear-gradient(135deg, #f9f9f9 0%, #f0f7e6 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiIGN4PSIyMCIgY3k9IjIwIiByPSIxIi8+PC9nPjwvc3ZnPg==');
    opacity: 0.2;
    z-index: 0;
  }
`;

const TestimonialHeading = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  
  h2 {
    margin-bottom: 1rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const TestimonialsCarousel = styled.div`
  display: flex;
  gap: 2.5rem;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  flex: 1;
  max-width: 380px;
  transition: all 0.3s ease;
  z-index: 1;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: 2rem;
    left: 2.5rem;
    font-size: 5rem;
    font-family: Georgia, serif;
    color: ${theme.colors.secondary}20;
    line-height: 1;
    z-index: -1;
  }
`;

const QuoteContent = styled.div`
  font-size: 1.15rem;
  color: ${theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #f0f0f0;
  padding-top: 1.5rem;
`;

const ClientAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
  border: 3px solid white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const ClientDetails = styled.div`
  h4 {
    font-size: 1.1rem;
    color: ${theme.colors.primary};
    margin: 0 0 0.3rem;
  }
  
  p {
    color: ${theme.colors.secondary};
    margin: 0;
    font-weight: 600;
    font-size: 0.9rem;
  }
`;

const TestimonialRating = styled.div`
  margin-left: auto;
  color: ${theme.colors.secondary};
  font-size: 1.1rem;
  display: flex;
  gap: 0.2rem;
`;

const TestimonialControls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  gap: 1rem;
  position: relative;
`;

const TestimonialButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 2px solid ${theme.colors.primary};
  background: transparent;
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${theme.colors.primary};
    color: white;
  }
`;

// Specialty Service Section Components
const SpecialtySection = styled(ServiceBlock)`
  background: ${theme.colors.primary};
  position: relative;
  padding: 8rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiNmZmYiIGN4PSIyMCIgY3k9IjIwIiByPSIxIi8+PC9nPjwvc3ZnPg==');
    opacity: 0.1;
    z-index: 0;
  }
`;

const SpecialtyHeading = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
  
  h2 {
    font-size: 3rem;
    color: white;
    display: inline-block;
    position: relative;
    margin-bottom: 2rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }
  
  p.subtitle {
    font-size: 1.3rem;
    color: ${theme.colors.secondary};
    font-weight: 500;
    margin-bottom: 1rem;
  }
`;

const SectionDescriptionLight = styled(SectionDescription)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
`;

const SpecialtyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SpecialtyCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  }
`;

const SpecialtyHeader = styled.div`
  padding: 2.5rem;
  border-bottom: 1px solid #eaeaea;
  
  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    gap: 1rem;
    
    .icon {
      color: ${theme.colors.secondary};
      font-size: 1.8rem;
    }
  }
  
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    margin: 0;
    font-size: 1.1rem;
  }
`;

// Add CardButton definition after ServiceButton
const CardButton = styled(Link)<{primary?: boolean}>`
  padding: 1rem 1.5rem;
  background: ${props => props.primary ? theme.colors.primary : 'transparent'};
  color: ${props => props.primary ? 'white' : theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s ease;
  flex: 1;
  
  &:hover {
    background: ${props => props.primary ? theme.colors.secondary : theme.colors.primary};
    color: ${props => props.primary ? theme.colors.primary : 'white'};
    border-color: ${props => props.primary ? theme.colors.secondary : theme.colors.primary};
    transform: translateY(-3px);
  }
`;

// Add the SpecialtyItem component definition
const SpecialtyItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  .icon-container {
    background: #f0f7e6;
    width: 50px;
    height: 50px;
    min-width: 50px; /* Ensure the icon container doesn't shrink */
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s ease;
    
    .icon {
      color: ${theme.colors.secondary};
      font-size: 1.3rem;
    }
  }
  
  &:hover .icon-container {
    background: ${theme.colors.secondary};
    
    .icon {
      color: white;
    }
  }
  
  .content {
    h4 {
      font-size: 1.1rem;
      color: ${theme.colors.primary};
      margin-bottom: 0.5rem;
    }
    
    p {
      color: ${theme.colors.text.secondary};
      font-size: 0.95rem;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

// Animation Hook
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1
    });
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isIntersecting;
}

const Services = () => {
  // Animation refs
  const specialtyRef = useRef(null);
  const processRef = useRef(null);
  const mainServicesRef = useRef(null);
  
  const isSpecialtyVisible = useIsVisible(specialtyRef);
  const isProcessVisible = useIsVisible(processRef);
  const isMainServicesVisible = useIsVisible(mainServicesRef);
  
  // Tab states for specialty services
  const [activeImmigrationTab, setActiveImmigrationTab] = useState('planning');
  const [activeTranslationTab, setActiveTranslationTab] = useState('translation');

  // Main service data
  const services = [
    {
      id: 'tax-returns',
      title: 'Tax Returns & Planning',
      description: 'Strategic tax preparation and planning to minimize liability and maximize your financial position.',
      icon: faFileInvoiceDollar,
      category: 'tax',
      features: ['Personal & Business Tax Returns', 'Tax Planning & Strategy', 'Tax Resolution Services']
    },
    {
      id: 'business-services',
      title: 'Business Advisory',
      description: 'Comprehensive accounting and consulting services to help your business thrive in today\'s competitive market.',
      icon: faBriefcase,
      category: 'business',
      features: ['Business Formation & Structure', 'Financial Statement Preparation', 'Strategic Business Planning']
    },
    {
      id: 'payroll',
      title: 'Payroll & Bookkeeping',
      description: 'Streamline your operations with accurate and reliable payroll processing and bookkeeping services.',
      icon: faMoneyBillWave,
      category: 'business',
      features: ['Payroll Processing & Tax Filing', 'Comprehensive Bookkeeping', 'Financial Record Management']
    },
    {
      id: 'cfo-services',
      title: 'CFO Services',
      description: 'Expert financial guidance and strategic planning without the cost of a full-time CFO.',
      icon: faChartBar,
      category: 'business',
      features: ['Financial Analysis & Reporting', 'Cash Flow Management', 'Strategic Planning']
    },
    {
      id: 'wealth-management',
      title: 'Wealth Management',
      description: 'Personalized investment strategies and retirement planning to secure your financial future.',
      icon: faUniversity,
      category: 'personal',
      features: ['Retirement Planning', 'Investment Strategy', 'Estate Planning']
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance',
      description: 'Stay compliant with ever-changing regulations and avoid costly penalties.',
      icon: faBalanceScale,
      category: 'tax',
      features: ['Tax Law Compliance', 'IRS Representation', 'Audit Support']
    }
  ];

  // Specialty service tab content
  const immigrationTabContent = {
    planning: [
      {
        title: 'Immigration Tax Planning',
        description: 'Strategic tax planning for individuals relocating to or from the U.S.',
        icon: faCheckCircle
      },
      {
        title: 'Pre-Immigration Planning',
        description: 'Tax strategies to implement before becoming a U.S. resident.',
        icon: faLightbulb
      },
      {
        title: 'Non-Resident Tax Returns',
        description: 'Specialized tax return preparation for non-resident individuals.',
        icon: faFileInvoiceDollar
      },
      {
        title: 'International Tax Treaties',
        description: 'Navigating complex international tax treaties and agreements.',
        icon: faHandshake
      }
    ],
    compliance: [
      {
        title: 'FBAR & FATCA Compliance',
        description: 'Ensuring compliance with Foreign Bank Account Reporting requirements.',
        icon: faShieldAlt
      },
      {
        title: 'Foreign Asset Reporting',
        description: 'Proper disclosure of foreign financial assets to avoid penalties.',
        icon: faGlobe
      },
      {
        title: 'Tax Residency Determination',
        description: 'Analysis of tax residency status under U.S. and foreign laws.',
        icon: faCalculator
      },
      {
        title: 'Compliance Remediation',
        description: 'Addressing past compliance issues through voluntary disclosure programs.',
        icon: faUniversity
      }
    ],
    consulting: [
      {
        title: 'Global Mobility Consulting',
        description: 'Tax advice for internationally mobile employees and expatriates.',
        icon: faBriefcase
      },
      {
        title: 'Business Expansion Planning',
        description: 'Tax implications of expanding business operations internationally.',
        icon: faChartLine
      },
      {
        title: 'Foreign Investment Advice',
        description: 'Tax guidance for U.S. residents investing in foreign countries.',
        icon: faMoneyBillWave
      },
      {
        title: 'Exit Strategy Planning',
        description: 'Tax considerations when leaving the U.S. tax system.',
        icon: faCogs
      }
    ]
  };
  
  const translationTabContent = {
    translation: [
      {
        title: 'Financial Document Translation',
        description: 'Accurate translation of financial statements, tax documents, and more.',
        icon: faFileInvoiceDollar
      },
      {
        title: 'Certified Translations',
        description: 'Official certified translations for legal and immigration purposes.',
        icon: faCheckCircle
      },
      {
        title: 'Legal Document Translation',
        description: 'Translation of contracts, agreements, and legal correspondence.',
        icon: faBookOpen
      },
      {
        title: 'Immigration Document Translation',
        description: 'Specialized translation of documents for immigration applications.',
        icon: faGlobe
      }
    ],
    notary: [
      {
        title: 'Notary Public Services',
        description: 'Official document verification and notarization services.',
        icon: faStamp
      },
      {
        title: 'Mobile Notary',
        description: 'Convenient notary services at your location of choice.',
        icon: faCogs
      },
      {
        title: 'Apostille Services',
        description: 'Authentication of documents for international use.',
        icon: faHandshake
      },
      {
        title: 'Document Certification',
        description: 'Official certification of copies and translations.',
        icon: faCheckCircle
      }
    ],
    documentation: [
      {
        title: 'Legal Document Preparation',
        description: 'Preparation of legal documents requiring translation and notarization.',
        icon: faBookOpen
      },
      {
        title: 'Business Documentation',
        description: 'Preparation of business documents for international use.',
        icon: faBriefcase
      },
      {
        title: 'Financial Documentation',
        description: 'Preparation of financial documents for official purposes.',
        icon: faMoneyBillWave
      },
      {
        title: 'Immigration Documentation',
        description: 'Preparation of documents for immigration applications.',
        icon: faGlobe
      }
    ]
  };

  // Process steps
  const processSteps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We begin with a thorough discussion of your financial situation and goals.'
    },
    {
      number: 2,
      title: 'Customized Strategy',
      description: 'Our experts develop a tailored plan based on your specific needs and objectives.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'We put your financial plan into action with expert precision and attention to detail.'
    },
    {
      number: 4,
      title: 'Ongoing Support',
      description: 'We provide continuous guidance, adjusting strategies as your needs evolve.'
    }
  ];

  // Update Testimonial section in the component
  const testimonials = [
    {
      id: 1,
      content: "Naseem CPA has transformed how we handle our business finances. Their expertise in tax planning saved us thousands of dollars last year alone. Their team is responsive, knowledgeable, and truly cares about our success.",
      name: "Michael Johnson",
      position: "CEO, Johnson Enterprises",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      id: 2,
      content: "As an immigrant to the U.S., I was overwhelmed by the tax system here. The immigration tax services team at Naseem CPA guided me through the process and ensured I remained compliant while minimizing my tax liability.",
      name: "Sarah Chen",
      position: "Software Engineer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      id: 3,
      content: "The translation and notary services provided by Naseem CPA were exceptional. They helped me with all the necessary documentation for my business expansion, ensuring everything was properly certified and legally sound.",
      name: "David Rodriguez",
      position: "Small Business Owner",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5
    }
  ];

  return (
    <ServicesSection>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Comprehensive Financial Solutions</HeroTitle>
            <HeroSubtitle>
              Expert accounting, tax, and advisory services tailored to your unique needs.
              We help individuals and businesses achieve financial success with confidence.
            </HeroSubtitle>
            <HeroButton to="/contact">
              Schedule a Free Consultation
              <FontAwesomeIcon icon={faChevronRight} />
            </HeroButton>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* SECTION 1: Enhanced Professional Services */}
      <ServiceBlock ref={mainServicesRef}>
        <Container>
          <SectionTitle>Our Professional Services</SectionTitle>
          <SectionDescription>
            We offer a comprehensive suite of financial services designed to help you navigate
            complex financial matters with confidence and peace of mind.
          </SectionDescription>
          
          <ProfessionalServices>
            <ServiceGallery>
              {services.map((service, idx) => {
                const isLarge = idx % 3 === 0;
                const isHorizontal = isLarge;
                const hasImage = isLarge;
                
                // Image URLs for large cards
                const imageUrls = [
                  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1111&q=80',
                  'https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1111&q=80',
                  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80'
                ];
                
                return (
                  <ServiceModule key={service.id} size={isLarge ? 'large' : 'small'}>
                    <ServiceItem position={isHorizontal ? 'horizontal' : 'vertical'}>
                      {hasImage && (
                        <ServiceVisual bg={imageUrls[idx % imageUrls.length]}>
                          <ServiceIconWrapper serviceCategory={service.id}>
                            <FontAwesomeIcon icon={service.icon} />
                          </ServiceIconWrapper>
                        </ServiceVisual>
                      )}
                      <ServiceContent>
                        {!hasImage && (
                          <ServiceIconWrapper serviceCategory={service.id}>
                            <FontAwesomeIcon icon={service.icon} />
                          </ServiceIconWrapper>
                        )}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <ServiceFeatures>
                          {service.features.map((feature, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ServiceFeatures>
                        <ServiceActions>
                          <ServiceButton to={`/contact?service=${service.id}`} variant="primary">
                            Learn More
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className="icon" />
                          </ServiceButton>
                        </ServiceActions>
                      </ServiceContent>
                    </ServiceItem>
                  </ServiceModule>
                );
              })}
            </ServiceGallery>
          </ProfessionalServices>
        </Container>
      </ServiceBlock>

      {/* SECTION 2: Enhanced Specialty Services */}
      <SpecialtySection ref={specialtyRef}>
        <Container>
          <SpecialtyHeading>
            <p className="subtitle">Working Across the Globe</p>
            <h2>Around the World</h2>
            <SectionDescriptionLight>
              Our specialized services are designed to meet the unique needs of our diverse clientele,
              providing expert guidance in areas requiring specialized knowledge and experience.
            </SectionDescriptionLight>
          </SpecialtyHeading>
          
          <SpecialtyGrid className={isSpecialtyVisible ? 'visible' : ''}>
            {/* Immigration Tax Services */}
            <SpecialtyCard>
              <SpecialtyHeader>
                <h3>
                  <FontAwesomeIcon icon={faGlobe} className="icon" />
                  Immigration Tax Services
                </h3>
                <p>
                  Navigating the U.S. tax system as an international individual or business requires specialized knowledge. Our immigration tax services provide comprehensive support for non-citizens and international businesses.
                </p>
              </SpecialtyHeader>
              
              <ServiceTabs>
                <ServiceTab 
                  active={activeImmigrationTab === 'planning'}
                  onClick={() => setActiveImmigrationTab('planning')}
                >
                  Tax Planning
                </ServiceTab>
                <ServiceTab 
                  active={activeImmigrationTab === 'compliance'}
                  onClick={() => setActiveImmigrationTab('compliance')}
                >
                  Compliance
                </ServiceTab>
                <ServiceTab 
                  active={activeImmigrationTab === 'consulting'}
                  onClick={() => setActiveImmigrationTab('consulting')}
                >
                  Consulting
                </ServiceTab>
              </ServiceTabs>
              
              <ServiceTabContent>
                <ServiceList>
                  {immigrationTabContent[activeImmigrationTab].map((service, index) => (
                    <SpecialtyItem key={index}>
                      <div className="icon-container">
                        <FontAwesomeIcon icon={service.icon} className="icon" />
                      </div>
                      <div className="content">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </SpecialtyItem>
                  ))}
                </ServiceList>
              </ServiceTabContent>
              
              <CardActions>
                <CardButton to="/contact?service=immigration-tax" primary={true}>
                  Schedule Consultation
                </CardButton>
                <CardButton to="/services/immigration-tax">
                  Learn More
                </CardButton>
              </CardActions>
            </SpecialtyCard>
            
            {/* Translation & Notary Services */}
            <SpecialtyCard>
              <SpecialtyHeader>
                <h3>
                  <FontAwesomeIcon icon={faLanguage} className="icon" />
                  Translation & Notary Services
                </h3>
                <p>
                  Clear communication is essential in financial and legal matters. Our professional translation and notary services ensure your documents are accurately translated and properly certified.
                </p>
              </SpecialtyHeader>
              
              <ServiceTabs>
                <ServiceTab 
                  active={activeTranslationTab === 'translation'}
                  onClick={() => setActiveTranslationTab('translation')}
                >
                  Translation
                </ServiceTab>
                <ServiceTab 
                  active={activeTranslationTab === 'notary'}
                  onClick={() => setActiveTranslationTab('notary')}
                >
                  Notary
                </ServiceTab>
                <ServiceTab 
                  active={activeTranslationTab === 'documentation'}
                  onClick={() => setActiveTranslationTab('documentation')}
                >
                  Documentation
                </ServiceTab>
              </ServiceTabs>
              
              <ServiceTabContent>
                <ServiceList>
                  {translationTabContent[activeTranslationTab].map((service, index) => (
                    <SpecialtyItem key={index}>
                      <div className="icon-container">
                        <FontAwesomeIcon icon={service.icon} className="icon" />
                      </div>
                      <div className="content">
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </SpecialtyItem>
                  ))}
                </ServiceList>
              </ServiceTabContent>
              
              <CardActions>
                <CardButton to="/contact?service=translation-notary" primary={true}>
                  Schedule Consultation
                </CardButton>
                <CardButton to="/services/translation-notary">
                  Learn More
                </CardButton>
              </CardActions>
            </SpecialtyCard>
          </SpecialtyGrid>
          
          <StatsContainer>
            <StatItem>
              <div className="value">32</div>
              <div className="label">Countries Served</div>
            </StatItem>
            <StatItem>
              <div className="value">2406</div>
              <div className="label">Successful Projects</div>
            </StatItem>
            <StatItem>
              <div className="value">120</div>
              <div className="label">Expert Team Members</div>
            </StatItem>
            <StatItem>
              <div className="value">100%</div>
              <div className="label">Customer Satisfaction</div>
            </StatItem>
          </StatsContainer>
        </Container>
      </SpecialtySection>

      {/* SECTION 3: Our Process */}
      <ProcessSection ref={processRef}>
        <Container>
          <SectionTitle>Our Client-Centered Process</SectionTitle>
          <SectionDescription>
            We follow a proven process to ensure exceptional results and complete client satisfaction
            from our first meeting through ongoing support.
          </SectionDescription>
          
          <ProcessStepsContainer className={isProcessVisible ? 'visible' : ''}>
            {processSteps.map((step) => (
              <ProcessStep key={step.number}>
                <StepNumber>{step.number}</StepNumber>
                <StepContent>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </StepContent>
              </ProcessStep>
            ))}
          </ProcessStepsContainer>
        </Container>
      </ProcessSection>

      {/* NEW SECTION 4: Enhanced Testimonials */}
      <TestimonialSection>
        <Container>
          <TestimonialHeading>
            <SectionTitle>What Our Clients Say</SectionTitle>
            <SectionDescription>
              Don't just take our word for it. Hear what our clients have to say about their experiences working with our team.
            </SectionDescription>
          </TestimonialHeading>
          
          <TestimonialsCarousel>
            {testimonials.slice(0, 3).map(testimonial => (
              <TestimonialCard key={testimonial.id}>
                <QuoteContent>
                  {testimonial.content}
                </QuoteContent>
                
                <ClientInfo>
                  <ClientAvatar style={{ backgroundImage: `url("${testimonial.avatar}")` }} />
                  <ClientDetails>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                  </ClientDetails>
                  <TestimonialRating>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </TestimonialRating>
                </ClientInfo>
              </TestimonialCard>
            ))}
          </TestimonialsCarousel>
          
          <TestimonialControls>
            <TestimonialButton>
              <FontAwesomeIcon icon={faChevronLeft} />
            </TestimonialButton>
            <TestimonialButton>
              <FontAwesomeIcon icon={faChevronRight} />
            </TestimonialButton>
          </TestimonialControls>
        </Container>
      </TestimonialSection>

      {/* SECTION 5: Enhanced CTA */}
      <CTASection>
        <Container>
          <CTAContent>
            <h2>Ready to Take Control of Your Finances?</h2>
            <p>
              Our team of certified professionals is ready to help you navigate complex financial matters
              with confidence. Schedule a consultation today to discover how we can help you achieve your financial goals.
            </p>
            <CTAButton to="/contact">
              Schedule Your Free Consultation
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
    </ServicesSection>
  );
};

export default Services;