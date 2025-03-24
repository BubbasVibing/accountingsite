import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const IndustriesSection = styled.section`
  background: ${theme.colors.background};
  padding: 6rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  color: ${theme.colors.primary};
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
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
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

export const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  justify-items: center;
`;

export const IndustryCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.05),
    0 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  width: 100%;
  max-width: 350px;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IndustryImage = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4)
    );
  }
`;

export const IndustryContent = styled.div`
  padding: 2rem;
  background: white;
`;

export const IndustryTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

export const IndustryDescription = styled.p`
  color: ${theme.colors.text.primary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

export const IndustryFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureItem = styled.li`
  color: ${theme.colors.text.primary};
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: ${theme.colors.secondary};
    font-weight: bold;
  }
`;

export const StyledIcon = styled.div`
  color: ${theme.colors.secondary};
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

export const ExperienceBanner = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, #1a365d 100%);
  color: white;
  padding: 6rem 2rem;
  width: 100vw;
  margin: 0 calc(-50vw + 50%);
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

export const ExperienceContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

export const ExperienceRightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
`;

export const SupportAgentImage = styled.div`
  width: 350px;
  height: 350px;
  background-image: url('/images/supportagent.png');
  background-size: cover;
  background-position: 10% center;
  background-repeat: no-repeat;
  border: 8px solid #1a365d;
  border-radius: 50%;
  margin: 0;
  display: block;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    background-size: cover;
    background-position: 10% center;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
  }
`;

export const ExperienceText = styled.div`
  h3 {
    font-size: 3.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(to right, #ffffff, #f0f0f0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 3px;
      background: ${theme.colors.secondary};
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.4rem;
    opacity: 0.95;
    margin-bottom: 2.5rem;
    line-height: 1.6;
    color: #f8f9fa;
    max-width: 800px;
  }
`;

export const ExperienceStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  max-width: 900px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .icon {
    font-size: 1.8rem;
    color: ${theme.colors.secondary};
    margin-bottom: 0.8rem;
    transition: transform 0.3s ease;
  }

  &:hover .icon {
    transform: scale(1.1);
  }

  h4 {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${theme.colors.secondary};
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  p {
    font-size: 1rem;
    color: #f8f9fa;
    margin: 0;
    font-weight: 500;
  }
`;

export const ExperienceButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: ${theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: ${theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export const QuickAccessSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const QuickAccessTitle = styled.h2`  color: ${theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
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
    background: ${theme.colors.secondary};
    border-radius: 2px;
  }
`;

export const QuickAccessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const QuickAccessItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    line-height: 1.6;
  }
`;
