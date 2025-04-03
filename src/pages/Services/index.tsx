import styled, { keyframes } from 'styled-components';
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
  faArrowRight,
  faShieldAlt,
  faChartBar,
  faFileInvoiceDollar,
  faHandshake,
  faLightbulb,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { theme } from '../../styles/theme';
import { useRef, useEffect, useState } from 'react';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { transform: translateX(-40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

const slideInRight = keyframes`
  from { transform: translateX(40px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`;

// Add more keyframe animations
const rotateIn = keyframes`
  from { transform: rotate(-10deg) scale(0.9); opacity: 0; }
  to { transform: rotate(0) scale(1); opacity: 1; }
`;

const fadeInUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ServicesSection = styled.section`
  background: white;
`;

const HeroSection = styled.div`
  padding: 10rem 2rem 6rem;
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
    background: ${theme.colors.primary};
    opacity: 0.7;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-top: 1.5rem;
`;

const ServiceBlock = styled.div`
  padding: 6rem 2rem;

  &:nth-child(even) {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
`;

const ServiceContent = styled.div<{ reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  ${props => props.reverse && `
    @media (min-width: 993px) {
      direction: rtl;
      
      > div {
        direction: ltr;
      }
    }
  `}
`;

const ServiceInfo = styled.div`
  animation: ${slideInLeft} 0.8s ease-out forwards;
  opacity: 0;
  
  h2 {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.1rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    margin-bottom: 2rem;
  }
`;

const ServiceImage = styled.div`
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${slideInRight} 0.8s ease-out forwards;
  opacity: 0;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ServiceFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.colors.text.secondary};
  font-weight: 500;
  
  .icon {
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
  }
`;

const ServiceCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(166, 207, 79, 0.3);
    
    .icon {
      transform: translateX(3px);
    }
  }
  
  .icon {
    transition: transform 0.3s ease;
  }
`;

const CTASection = styled.section`
  padding: 6rem 2rem;
  background: ${theme.colors.primary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&q=80') center/cover no-repeat;
    opacity: 0.1;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
    opacity: 0.9;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    
    .icon {
      transform: translateX(3px);
    }
  }
  
  .icon {
    transition: transform 0.3s ease;
  }
`;

// Hook for animation on scroll
const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    if (elements) {
      elements.forEach(el => observer.observe(el));
    }
    
    return () => {
      if (elements) {
        elements.forEach(el => observer.unobserve(el));
      }
    };
  }, [options]);
  
  return containerRef;
};

// Unique section styles
const BusinessServiceBlock = styled(ServiceBlock)`
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -100px;
    right: -100px;
    width: 300px;
    height: 300px;
    background: ${theme.colors.secondary}20;
    border-radius: 50%;
    z-index: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50px;
    left: -50px;
    width: 200px;
    height: 200px;
    background: ${theme.colors.primary}10;
    border-radius: 50%;
    z-index: 0;
  }
`;

const PayrollServiceBlock = styled(ServiceBlock)`
  background: linear-gradient(135deg, #ffffff 0%, #f0f5ff 100%);
`;

const PayrollGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PayrollCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 240px;
  justify-content: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  }
  
  .icon-wrapper {
    background: ${theme.colors.secondary}15;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary};
    margin-bottom: 1.8rem;
    font-size: 1.8rem;
  }
  
  h3 {
    font-size: 1.6rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.2rem;
  }
  
  p {
    font-size: 1.15rem;
    color: ${theme.colors.text.secondary};
    margin: 0;
    line-height: 1.6;
    max-width: 85%;
    margin: 0 auto;
  }
`;

const ImmigrationServiceBlock = styled(ServiceBlock)`
  background: url('https://images.unsplash.com/photo-1552619020-d8d85d06e734?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3') right bottom/cover no-repeat fixed;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.85) 50%, rgba(255, 255, 255, 0.7) 100%);
    z-index: 1;
  }
`;

const ImmigrationContainer = styled(Container)`
  position: relative;
  z-index: 2;
`;

// Add slide-in and pulse animations for the timeline
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

// Update the ImmigrationTimeline styling
const ImmigrationTimeline = styled.div`
  position: relative;
  margin: 3rem 0;
  padding-left: 2.5rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #e0e0e0; /* Grey color for the timeline bar */
    border-radius: 3px;
  }
`;

// Update the TimelineItem styling
const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 2.5rem;
  animation: ${slideInUp} 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards;
  opacity: 0;
  cursor: pointer;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.3s; }
  &:nth-child(3) { animation-delay: 0.5s; }
  &:nth-child(4) { animation-delay: 0.7s; }
  
  &:last-child {
    padding-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 0.5rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #b0b0b0; /* Grey color for inactive circles */
    border: 3px solid white;
    box-shadow: 0 0 0 3px rgba(176, 176, 176, 0.3); /* Grey shadow for inactive */
    animation: none; /* No animation by default */
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    animation: ${pulseGlow} 1s infinite;
    background: #c8c8c8; /* Lighter grey on hover */
  }
  
  h3 {
    font-size: 1.3rem;
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  p {
    font-size: 1rem;
    color: ${theme.colors.text.secondary};
    margin: 0;
    max-width: 90%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    h3 {
      transform: translateX(5px);
      color: ${theme.colors.secondary};
    }
    
    p {
      transform: translateX(5px);
    }
  }
  
  &.active {
    h3 {
      color: ${theme.colors.secondary};
      font-weight: 700;
    }
    
    &::before {
      background: ${theme.colors.secondary}; /* Green color for active circle */
      animation: ${pulseGlow} 1s infinite;
      width: 20px;
      height: 20px;
      left: -2.6rem;
      top: 0.3rem;
      box-shadow: 0 0 0 3px ${theme.colors.secondary}50; /* Green shadow for active */
    }
  }
`;

// Update the ImmigrationButton styling
const ImmigrationButton = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
  padding-left: 2.5rem;
`;

const TranslationServiceBlock = styled(ServiceBlock)`
  background: white;
`;

const TranslationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TranslationCard = styled.div`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.secondary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    
    &::after {
      transform: scaleX(1);
    }
  }
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      color: ${theme.colors.text.secondary};
      margin-bottom: 0.8rem;
      
      .icon {
        color: ${theme.colors.secondary};
      }
    }
  }
`;

// Add these additional styled components for the new Business Services section
const BusinessContent = styled.div`
  padding: 2rem 0;
`;

const BusinessHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  h2 {
    font-size: 2.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }
  
  p {
    max-width: 800px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
  }
`;

const BusinessTabsContainer = styled.div`
  margin: 2rem 0 3rem;
`;

const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled.button<{ isActive: boolean }>`
  background: ${props => props.isActive ? theme.colors.primary : 'white'};
  color: ${props => props.isActive ? 'white' : theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isActive ? theme.colors.primary : `${theme.colors.primary}10`};
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`;

const TabContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const TabContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TabContentImageWrapper = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${theme.colors.secondary};
  }
`;

const TabContentInfo = styled.div`
  h3 {
    font-size: 2rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }
  
  p {
    font-size: 1.1rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  .icon-wrapper {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${theme.colors.secondary}15;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary};
    flex-shrink: 0;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      color: ${theme.colors.primary};
      margin-bottom: 0.2rem;
    }
    
    p {
      font-size: 0.95rem;
      margin: 0;
    }
  }
`;

// Add a styled component for the expertise card
const ExpertiseCard = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
  
  h3 {
    font-size: 1.8rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.8rem;
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }
`;

const ExpertiseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ExpertiseItem = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  
  .icon-container {
    background: ${theme.colors.secondary}15;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    flex-shrink: 0;
  }
  
  .content {
    h4 {
      color: ${theme.colors.primary};
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    p {
      color: ${theme.colors.text.secondary};
      font-size: 1rem;
      margin: 0;
      line-height: 1.5;
    }
  }
`;

// Update the DetailContent component to be smaller and better centered
const DetailContent = styled.div`
  padding: 1.8rem;
  background: white;
  border-radius: 14px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  max-width: 90%;
  margin: 0 auto;
  height: auto;
  display: flex;
  flex-direction: column;
  
  h3 {
    font-size: 1.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.7rem;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }
  
  p {
    font-size: 1rem;
    color: ${theme.colors.text.secondary};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.2rem;
    margin-bottom: 1.2rem;
    
    li {
      margin-bottom: 0.5rem;
      color: ${theme.colors.text.secondary};
      position: relative;
      font-size: 0.95rem;
      line-height: 1.4;
      
      &::before {
        content: '•';
        color: ${theme.colors.secondary};
        font-weight: bold;
        position: absolute;
        left: -1.2rem;
      }
    }
  }
  
  .detail-icon {
    font-size: 2.2rem;
    color: ${theme.colors.secondary};
    margin-bottom: 1rem;
    display: block;
    text-align: center;
  }
  
  .detail-cta {
    margin-top: 1rem;
    display: inline-block;
    align-self: flex-start;
  }
`;

const Services = () => {
  const animationRef = useElementOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });
  
  // Add state for active tab
  const [activeTab, setActiveTab] = useState('formation');
  
  // Add state for the active immigration service
  const [activeService, setActiveService] = useState<'immigration-tax' | 'international-returns' | 'visa-support' | 'fbar-compliance'>('immigration-tax');
  
  const services = [
    {
      id: 'tax-returns',
      icon: faChartLine,
      title: 'Tax Returns & Planning',
      description: 'Comprehensive tax preparation and strategic planning services tailored to your unique situation. We stay up-to-date with tax code changes to help maximize your returns and minimize liabilities through careful planning.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
      features: [
        'Personal Tax Returns',
        'Business Tax Returns',
        'Tax Planning & Strategy',
        'Tax Compliance Review',
        'Audit Support',
        'Electronic Filing'
      ]
    },
    {
      id: 'business-services',
      icon: faBriefcase,
      title: 'Business Services',
      description: 'Complete business accounting and consulting services designed to help your business thrive. From startup formation to ongoing operations and growth strategy, we provide the financial expertise you need at every stage.',
      image: 'https://images.unsplash.com/photo-1664575599736-c5197c684172?auto=format&fit=crop&q=80',
      features: [
        'Business Formation',
        'Financial Statements',
        'Business Consulting',
        'Growth Strategy',
        'Cash Flow Management',
        'Financial Forecasting'
      ]
    },
    {
      id: 'payroll',
      icon: faMoneyBillWave,
      title: 'Payroll & Bookkeeping',
      description: 'Streamline your operations with our comprehensive payroll and bookkeeping services. We handle the details so you can focus on running your business, with accurate and timely reporting to keep you informed.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80',
      features: [
        'Payroll Processing',
        'Bookkeeping Services',
        'Financial Records',
        'Monthly Reports',
        'Tax Withholding',
        'Employee Benefits Administration'
      ]
    },
    {
      id: 'immigration',
      icon: faGlobe,
      title: 'Immigration Services',
      description: 'Specialized tax and financial services for international clients. We understand the complexities of cross-border taxation and provide expert guidance to help you navigate immigration financial requirements with confidence.',
      image: 'https://images.unsplash.com/photo-1569974281888-f76d19c4b46d?auto=format&fit=crop&q=80',
      features: [
        'Immigration Tax Planning',
        'International Tax Returns',
        'Visa Financial Support',
        'Cross-Border Services',
        'Foreign Income Reporting',
        'FBAR Compliance'
      ]
    },
    {
      id: 'translation',
      icon: faLanguage,
      title: 'Translation & Notary',
      description: 'Professional translation and notary services for all your documentation needs. From legal documents to personal certificates, we provide accurate translations and certified notary services to ensure your documents are properly prepared.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
      features: [
        'Document Translation',
        'Notary Services',
        'Certified Copies',
        'Legal Documentation',
        'Multi-language Support',
        'Fast Turnaround'
      ]
    }
  ];

  // Business services tab data
  const businessTabs = [
    {
      id: 'formation',
      label: 'Business Formation',
      title: 'Strategic Business Formation',
      description: 'We guide you through the entity selection process to create the optimal business structure for your needs, maximizing tax benefits and providing liability protection.',
      image: 'https://images.unsplash.com/photo-1664575197229-3bbebc281874?auto=format&fit=crop&q=80',
      benefits: [
        {
          icon: faBriefcase,
          title: 'Entity Selection',
          desc: 'Expert advice on choosing between LLC, S-Corp, C-Corp, or Partnership structures.'
        },
        {
          icon: faShieldAlt,
          title: 'Liability Protection',
          desc: 'Strategic formation to protect your personal assets from business risks.'
        },
        {
          icon: faFileInvoiceDollar,
          title: 'Tax Optimization',
          desc: 'Structure your business to minimize tax burden and maximize deductions.'
        },
      ]
    },
    {
      id: 'financial',
      label: 'Financial Statements',
      title: 'Comprehensive Financial Reporting',
      description: 'Our team prepares accurate, detailed financial statements that provide insight into your business performance and help you make informed decisions.',
      image: 'https://images.unsplash.com/photo-1554224155-6723b248e6f7?auto=format&fit=crop&q=80',
      benefits: [
        {
          icon: faChartBar,
          title: 'Performance Analysis',
          desc: 'Clear insights into your financial position and business performance.'
        },
        {
          icon: faHandshake,
          title: 'Investor Relations',
          desc: 'Professional statements that inspire confidence from investors and lenders.'
        },
        {
          icon: faCheckCircle,
          title: 'Regulatory Compliance',
          desc: 'Ensure your financial reporting meets all regulatory requirements.'
        },
      ]
    },
    {
      id: 'consulting',
      label: 'Business Consulting',
      title: 'Expert Business Consulting',
      description: 'Our consultants work closely with you to identify opportunities, overcome challenges, and implement strategies that drive sustainable growth.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80',
      benefits: [
        {
          icon: faLightbulb,
          title: 'Strategic Planning',
          desc: 'Develop clear, actionable business plans aligned with your goals.'
        },
        {
          icon: faChartLine,
          title: 'Performance Improvement',
          desc: 'Identify inefficiencies and implement solutions to boost performance.'
        },
        {
          icon: faMoneyBillWave,
          title: 'Cost Optimization',
          desc: 'Analyze expenses and implement strategies to improve profitability.'
        },
      ]
    },
    {
      id: 'growth',
      label: 'Growth Strategy',
      title: 'Data-Driven Growth Strategies',
      description: 'We help you identify market opportunities and develop sustainable growth strategies based on solid financial analysis and market research.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80',
      benefits: [
        {
          icon: faChartLine,
          title: 'Market Expansion',
          desc: 'Identify new markets and opportunities to scale your business.'
        },
        {
          icon: faUsers,
          title: 'Customer Acquisition',
          desc: 'Develop strategies to attract and retain profitable customers.'
        },
        {
          icon: faFileInvoiceDollar,
          title: 'Financial Forecasting',
          desc: 'Project future performance to make confident business decisions.'
        },
      ]
    },
  ];

  // Find the active tab data
  const activeTabData = businessTabs.find(tab => tab.id === activeTab) || businessTabs[0];

  // Immigration service details with proper TypeScript interface
  interface ImmigrationDetailType {
    title: string;
    icon: typeof faGlobe | typeof faFileInvoiceDollar | typeof faHandshake | typeof faShieldAlt;
    description: string;
    benefits: string[];
  }
  
  const immigrationDetails: Record<'immigration-tax' | 'international-returns' | 'visa-support' | 'fbar-compliance', ImmigrationDetailType> = {
    'immigration-tax': {
      title: 'Immigration Tax Planning',
      icon: faGlobe,
      description: 'Our Immigration Tax Planning services help you navigate the complex tax regulations that affect non-US citizens and residents with foreign income and assets.',
      benefits: [
        'Personalized tax strategy for your specific immigration status',
        'Identification of available deductions and credits based on residency status',
        'Planning for dual-country tax obligations and treaty benefits',
        'Guidance on tax implications of immigration status changes',
        'Strategies to minimize global tax burden while remaining compliant'
      ]
    },
    'international-returns': {
      title: 'International Tax Returns',
      icon: faFileInvoiceDollar,
      description: 'We specialize in preparing accurate tax returns for U.S. residents with international income sources and assets, ensuring compliance with both U.S. and foreign tax laws.',
      benefits: [
        'Expert handling of complex international income reporting',
        'Proper reporting of foreign income, assets, and financial accounts',
        'Application of foreign tax credits to avoid double taxation',
        'Filing of all required international information returns',
        'Assistance with amended returns for previous years if needed'
      ]
    },
    'visa-support': {
      title: 'Visa Financial Support',
      icon: faHandshake,
      description: 'Our team provides the comprehensive financial documentation required for various visa applications, helping you meet the strict requirements set by immigration authorities.',
      benefits: [
        'Preparation of financial statements tailored to visa requirements',
        'Documentation of sufficient financial resources for visa approval',
        'Income verification and financial history documentation',
        'Expert guidance on financial requirements for specific visa types',
        'Assistance with responding to financial inquiries from USCIS'
      ]
    },
    'fbar-compliance': {
      title: 'FBAR Compliance',
      icon: faShieldAlt,
      description: 'We help U.S. citizens and residents comply with Foreign Bank Account Reporting (FBAR) requirements, avoiding severe penalties for non-compliance with these often-overlooked regulations.',
      benefits: [
        'Timely filing of FinCEN Form 114 (FBAR) to meet federal requirements',
        'Proper disclosure of foreign financial accounts exceeding reporting thresholds',
        'Guidance on FATCA compliance and Form 8938 requirements',
        'Assistance with voluntary disclosure programs for past non-compliance',
        'Ongoing monitoring of account values for reporting threshold changes'
      ]
    }
  };

  return (
    <ServicesSection>
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>Our Services</HeroTitle>
            <HeroSubtitle>
              Comprehensive financial solutions tailored to meet your specific needs. 
              We provide expert services to help you achieve your financial goals.
            </HeroSubtitle>
          </HeroContent>
        </Container>
      </HeroSection>

      <div ref={animationRef}>
        {/* Tax Returns Service - Keep original layout */}
        <ServiceBlock id="tax-returns">
          <Container>
            <ServiceContent>
              <ServiceInfo className="animate-on-scroll">
                <h2>{services[0].title}</h2>
                <p>{services[0].description}</p>
                <ServiceFeatureList>
                  {services[0].features.map((feature, i) => (
                    <ServiceFeatureItem key={i}>
                      <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                      {feature}
                    </ServiceFeatureItem>
                  ))}
                </ServiceFeatureList>
                <ServiceCTA to="/contact">
                  Learn More
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />
                </ServiceCTA>
              </ServiceInfo>
              <ServiceImage className="animate-on-scroll">
                <img src={services[0].image} alt={services[0].title} />
              </ServiceImage>
            </ServiceContent>
          </Container>
        </ServiceBlock>

        {/* Business Services - New Design with Tabs */}
        <BusinessServiceBlock id="business-services">
          <Container>
            <BusinessContent>
              <BusinessHeader className="animate-on-scroll">
                <h2>{services[1].title}</h2>
                <p>{services[1].description}</p>
              </BusinessHeader>
              
              <BusinessTabsContainer>
                <TabsWrapper>
                  {businessTabs.map(tab => (
                    <TabButton 
                      key={tab.id}
                      isActive={activeTab === tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className="animate-on-scroll"
                    >
                      {tab.label}
                    </TabButton>
                  ))}
                </TabsWrapper>
                
                <TabContent className="animate-on-scroll">
                  <TabContentGrid>
                    <TabContentImageWrapper>
                      <img 
                        src={activeTabData.image} 
                        alt={activeTabData.title} 
                      />
                    </TabContentImageWrapper>
                    
                    <TabContentInfo>
                      <h3>{activeTabData.title}</h3>
                      <p>{activeTabData.description}</p>
                      
                      <BenefitsList>
                        {activeTabData.benefits.map((benefit, index) => (
                          <BenefitItem key={index}>
                            <div className="icon-wrapper">
                              <FontAwesomeIcon icon={benefit.icon} />
                            </div>
                            <div>
                              <h4>{benefit.title}</h4>
                              <p>{benefit.desc}</p>
                            </div>
                          </BenefitItem>
                        ))}
                      </BenefitsList>
                      
                      <ServiceCTA to="/contact">
                        Get Expert Guidance
                        <FontAwesomeIcon icon={faChevronRight} className="icon" />
                      </ServiceCTA>
                    </TabContentInfo>
                  </TabContentGrid>
                </TabContent>
              </BusinessTabsContainer>
            </BusinessContent>
          </Container>
        </BusinessServiceBlock>

        {/* Payroll & Bookkeeping - Fix inline media queries */}
        <PayrollServiceBlock id="payroll">
          <Container>
            <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{ 
                fontSize: '2.8rem', 
                color: theme.colors.primary,
                marginBottom: '1.5rem',
                position: 'relative',
                display: 'inline-block'
              }}>
                {services[2].title}
                <span style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '3px',
                  background: theme.colors.secondary,
                  borderRadius: '2px'
                }}></span>
              </h2>
              <p style={{ 
                fontSize: '1.1rem',
                color: theme.colors.text.secondary,
                lineHeight: '1.7',
                marginBottom: '1rem',
                maxWidth: '900px',
                margin: '0 auto 2rem'
              }}>
                {services[2].description}
              </p>
            </div>
            
            <PayrollGrid>
              <PayrollCard className="animate-on-scroll">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                </div>
                <h3>Payroll Processing</h3>
                <p>Timely and accurate processing with direct deposits and tax handling.</p>
              </PayrollCard>
              
              <PayrollCard className="animate-on-scroll">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </div>
                <h3>Bookkeeping</h3>
                <p>Comprehensive recording and organization of all financial transactions.</p>
              </PayrollCard>
            </PayrollGrid>
            
            <PayrollGrid style={{ marginTop: '0' }}>
              <PayrollCard className="animate-on-scroll">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faChartBar} />
                </div>
                <h3>Financial Reports</h3>
                <p>Detailed monthly and quarterly reports to track your business performance.</p>
              </PayrollCard>
              
              <PayrollCard className="animate-on-scroll">
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} />
                </div>
                <h3>Tax Compliance</h3>
                <p>Stay compliant with all tax regulations and filing requirements.</p>
              </PayrollCard>
            </PayrollGrid>
            
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <ServiceCTA to="/contact">
                Streamline Your Operations
                <FontAwesomeIcon icon={faChevronRight} className="icon" />
              </ServiceCTA>
            </div>
          </Container>
        </PayrollServiceBlock>

        {/* Immigration & Translation Sections - Also fix inline media queries */}
        <ImmigrationServiceBlock id="immigration">
          <ImmigrationContainer>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem'
            }} className="immigration-grid">
              <div className="animate-on-scroll">
                <h2 style={{ 
                  fontSize: '2.5rem', 
                  color: theme.colors.primary,
                  marginBottom: '1.5rem',
                  position: 'relative',
                  paddingBottom: '1rem',
                  display: 'inline-block'
                }}>
                  {services[3].title}
                  <span style={{ 
                    position: 'absolute', 
                    bottom: '0',
                    left: '0',
                    width: '80px',
                    height: '3px',
                    background: theme.colors.secondary,
                    borderRadius: '2px'
                  }}></span>
                </h2>
                <p style={{ 
                  fontSize: '1.1rem',
                  color: theme.colors.text.secondary,
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  {services[3].description}
                </p>
                
                <ImmigrationTimeline>
                  <TimelineItem 
                    className={activeService === 'immigration-tax' ? 'active' : ''}
                    onClick={() => setActiveService('immigration-tax')}
                  >
                    <h3>Immigration Tax Planning</h3>
                    <p>Strategic planning to ensure compliance with both U.S. and foreign tax regulations.</p>
                  </TimelineItem>
                  
                  <TimelineItem 
                    className={activeService === 'international-returns' ? 'active' : ''}
                    onClick={() => setActiveService('international-returns')}
                  >
                    <h3>International Tax Returns</h3>
                    <p>Expert preparation of tax returns for U.S. residents with foreign income and assets.</p>
                  </TimelineItem>
                  
                  <TimelineItem 
                    className={activeService === 'visa-support' ? 'active' : ''}
                    onClick={() => setActiveService('visa-support')}
                  >
                    <h3>Visa Financial Support</h3>
                    <p>Documentation and financial statements required for visa applications.</p>
                  </TimelineItem>
                  
                  <TimelineItem 
                    className={activeService === 'fbar-compliance' ? 'active' : ''}
                    onClick={() => setActiveService('fbar-compliance')}
                  >
                    <h3>FBAR Compliance</h3>
                    <p>Assistance with Foreign Bank Account Reports to meet federal requirements.</p>
                  </TimelineItem>
                </ImmigrationTimeline>
                
                <ImmigrationButton>
                  <ServiceCTA to="/contact">
                    Get Expert Guidance
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                  </ServiceCTA>
                </ImmigrationButton>
              </div>
              
              <div className="animate-on-scroll" style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center',
                alignItems: 'center' // Center horizontally
              }}>
                <DetailContent>
                  <FontAwesomeIcon icon={immigrationDetails[activeService].icon} className="detail-icon" />
                  <h3>{immigrationDetails[activeService].title}</h3>
                  <p>{immigrationDetails[activeService].description}</p>
                  <h4 style={{ 
                    fontSize: '1.1rem',
                    color: theme.colors.primary,
                    marginBottom: '0.8rem'
                  }}>
                    How We Help You
                  </h4>
                  <ul>
                    {immigrationDetails[activeService].benefits.map((benefit: string, index: number) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                  <ServiceCTA to="/contact" className="detail-cta">
                    Learn More
                    <FontAwesomeIcon icon={faChevronRight} className="icon" />
                  </ServiceCTA>
                </DetailContent>
              </div>
            </div>
          </ImmigrationContainer>
        </ImmigrationServiceBlock>

        {/* Translation & Notary - Unique Layout */}
        <TranslationServiceBlock id="translation">
          <Container>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }} className="animate-on-scroll">
              <h2 style={{ 
                fontSize: '2.8rem', 
                color: theme.colors.primary, 
                display: 'inline-block',
                position: 'relative',
                marginBottom: '1.5rem'
              }}>
                {services[4].title}
                <span style={{ 
                  position: 'absolute', 
                  bottom: '-10px', 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '3px',
                  background: theme.colors.secondary,
                  borderRadius: '2px'
                }}></span>
              </h2>
              <p style={{ 
                maxWidth: '800px', 
                margin: '0 auto', 
                fontSize: '1.1rem',
                color: theme.colors.text.secondary,
                lineHeight: '1.7'
              }}>
                {services[4].description}
              </p>
            </div>
            
            <TranslationGrid>
              <TranslationCard className="animate-on-scroll">
                <h3>Document Translation</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Legal Documents
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Financial Records
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Personal Identification
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Business Contracts
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Technical Documents
                  </li>
                </ul>
              </TranslationCard>
              
              <TranslationCard className="animate-on-scroll">
                <h3>Notary Services</h3>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Document Authentication
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Certified Copies
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Affidavits and Statements
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Power of Attorney
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                    Apostille Service
                  </li>
                </ul>
              </TranslationCard>
            </TranslationGrid>
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              marginTop: '2rem' 
            }}>
              <div style={{ 
                background: theme.colors.primary, 
                borderRadius: '16px',
                padding: '2rem',
                maxWidth: '800px',
                boxShadow: '0 15px 30px rgba(19, 42, 76, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }} className="animate-on-scroll">
                <h3 style={{ 
                  color: 'white', 
                  fontSize: '1.8rem', 
                  marginBottom: '1rem' 
                }}>
                  Certified For Your Peace of Mind
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  textAlign: 'center', 
                  marginBottom: '1.5rem',
                  fontSize: '1.1rem',
                  lineHeight: '1.7'
                }}>
                  Our translation and notary services meet the highest standards of accuracy and legal compliance, 
                  accepted by all government agencies and institutions.
                </p>
                <ServiceCTA to="/contact" style={{ 
                  background: 'white',
                  color: theme.colors.primary
                }}>
                  Request Service
                  <FontAwesomeIcon icon={faChevronRight} className="icon" />
                </ServiceCTA>
              </div>
            </div>
          </Container>
        </TranslationServiceBlock>
      </div>

      <CTASection>
        <Container>
          <CTAContent>
            <h2>Ready to Get Started?</h2>
            <p>
              Schedule a free consultation with our team and discover how we can help
              you achieve your financial goals with confidence.
            </p>
            <CTAButton to="/contact">
              Get Started Today
              <FontAwesomeIcon icon={faChevronRight} className="icon" />
            </CTAButton>
          </CTAContent>
        </Container>
      </CTASection>
      
      <style>
        {`
          .animate-on-scroll {
            opacity: 0;
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          
          .animate-on-scroll.visible {
            opacity: 1;
            transform: translateX(0);
          }
          
          .business-card {
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.5s ease;
          }
          
          .business-card.visible {
            transform: translateY(0);
            opacity: 1;
          }
          
          .business-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </ServicesSection>
  );
};

export default Services; 